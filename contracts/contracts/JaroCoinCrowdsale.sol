pragma solidity 0.4.21;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";

import "./JaroCoinToken.sol";
import "./SleepContract.sol";
import "./PersonalContract.sol";

contract JaroCoinCrowdsale is Ownable {
    using SafeMath for uint256;

    address public constant WALLET = 0x1111111111111111111111111111111111111111;

    // uint256 public constant START_TIME = 1522584000;  // Time for first token sale - 2018/04/01 12:00 UTC +0
    uint256 public constant ONE_MONTH = 2592000;      // One month

    // Pre sale tokens - my current liabilities + supporters tokens
    uint256 public constant PRE_SALE_AMOUNT = 840000; // 4% of first 21 000 000 tokens

    // Max tokens which can be in circulation
    uint256 public constant MAX_AMOUNT = 21000000e18; // 21 000 000
    uint256 public rate = 100000e10;                  // number of tokens buyer gets per satoshi
    uint256 public conversionRate = 17e10;            // wei per satoshi - per ETH => 0.056 ETH/BTC ? wei per satoshi?

    JaroCoinToken public token;
    JaroSleep public sleepContract;
    PersonalTime public familyContract;
    PersonalTime public personalContract;

    uint256 public tokensToMint;                      // Amount of tokens left to mint in this sale
    uint256 public saleStartTime;                     // Start time of recent token sale

    // Amount of raised funds in satoshi
    uint256 public satoshiRaised = 0;

    // Indicator of token sale activity.
    bool public isActive = false;

    /**
    * event for token purchase logging
    * @param purchaser who paid for the tokens
    * @param beneficiary who got the tokens
    * @param value satoshi paid for purchase
    * @param amount amount of tokens purchased
    */
    event TokenPurchase(address indexed purchaser, address indexed beneficiary, uint256 value, uint256 amount);

    /**
     * When there no tokens left to mint and token minter tries to manually mint tokens
     * this event is raised to signal how many tokens we have to charge back to purchaser
     */
    event ManualTokenMintRequiresRefund(address indexed purchaser, uint256 value);

    /**
     * Notifies when new sale stage is setuped.
     * @param startTime time of token sale begining.
     * @param amount max amount of tokens to be minted in this sale period.
     */
    event SaleActivated(uint256 startTime, uint256 amount);
    event SaleClosed();

    modifier canMint() {
        require (isActive);
        require (getNow() > saleStartTime);
        _;
    }

    function JaroCoinCrowdsale(address _owner, address _token, address _familyOwner, address _personalOwner) public {
        token = JaroCoinToken(_token);

        sleepContract = createJaroSleep(_token, 34560e18);       // 9.6 hours per day
        familyContract = createPersonalTime(_token, 21600e18);   // 6 hours per day
        personalContract = createPersonalTime(_token, 12960e18); // 3.6 hours per day

        familyContract.transferOwnership(_familyOwner);
        personalContract.transferOwnership(_personalOwner);

        // startSale(START_TIME);
        transferOwnership(_owner);
    }

    // fallback function can be used to buy tokens or claim refund
    function () external payable {
        _buyTokens(msg.sender, 0);
    }

    function coupon(uint256 _timeStamp, uint8 _bonus, uint8 v, bytes32 r, bytes32 s) external payable {
        require(_timeStamp >= getNow());

        // Check if signature is valid, get signer's address and mark this cheque as used.
        bytes memory prefix = "\x19Ethereum Signed Message:\n32";
        bytes32 hash = keccak256(prefix, keccak256(_timeStamp, _bonus));

        address signer = ecrecover(hash, v, r, s);
        require(signer == owner);

        _buyTokens(msg.sender, _bonus);
    }

    function buyTokens(address _beneficiary) public canMint payable {
        _buyTokens(_beneficiary, 0);
    }

    function _buyTokens(address _beneficiary, uint8 _bonus) internal {
        require (_beneficiary != address(0));
        require (msg.value > 0);

        uint256 weiAmount = msg.value;
        uint256 satoshiAmount = weiAmount.div(conversionRate);
        uint256 tokens = satoshiAmount.mul(rate).mul(100+_bonus).div(100);

        // // Mint tokens and refund not used ethers in case when max amount reached during this minting
        uint256 excess = appendContribution(_beneficiary, tokens);
        uint256 refund = (excess > 0 ? excess.mul(100).div(100+_bonus).mul(conversionRate).div(rate) : 0);
        weiAmount = weiAmount.sub(refund);
        satoshiRaised = satoshiRaised.add(weiAmount.mul(conversionRate));

        // if hard cap reached, no more tokens to mint, refund sender not used ethers
        if (refund > 0) {
            msg.sender.transfer(refund);
        }

        emit TokenPurchase(msg.sender, _beneficiary, weiAmount, tokens.sub(excess));

        // Send ethers into WALLET
        WALLET.transfer(weiAmount);
    }

    function appendContribution(address _beneficiary, uint256 _tokens) internal returns (uint256) {
        if (_tokens >= tokensToMint) {
            mint(_beneficiary, tokensToMint);
            uint256 excededTokens = _tokens.sub(tokensToMint);
            _closeSale(); // Last tokens minted, lets close token sale
            return excededTokens;
        }

        tokensToMint = tokensToMint.sub(_tokens);
        mint(_beneficiary, _tokens);
        return 0;
    }

    /**
     * Owner can start new token sale, to mint missing tokens by using this function,
     * but not more often than once per month.
     * @param _startTime start time for new token sale.
    */
    function startSale(uint256 _startTime) public onlyOwner {
        require (!isActive);
        require (_startTime > getNow());
        require (saleStartTime == 0 || _startTime.sub(saleStartTime) > 30 days);   // Minimum one month between token sales

        // Burn unburned sleep, family and personal time.
        sleepContract.burnTokens();
        uint256 sleepTokens = token.balanceOf(address(sleepContract));

        familyContract.burnTokens();
        uint256 familyTokens = token.balanceOf(familyContract).add(familyContract.debt());

        personalContract.burnTokens();
        uint256 personalTokens = token.balanceOf(personalContract).add(personalContract.debt());

        uint256 missingSleep = MAX_AMOUNT.div(100).mul(40).sub(sleepTokens);       // sleep and stuff takes 40% of Jaro time
        uint256 missingFamily = MAX_AMOUNT.div(100).mul(25).sub(familyTokens);     // 25% for family
        uint256 missingPersonal = MAX_AMOUNT.div(100).mul(15).sub(personalTokens); // 15% is Jaro personal time

        mint(address(sleepContract), missingSleep);
        mint(address(familyContract), missingFamily);
        mint(address(personalContract), missingPersonal);

        tokensToMint = MAX_AMOUNT.sub(token.totalSupply());
        saleStartTime = _startTime;
        isActive = true;
        emit SaleActivated(_startTime, tokensToMint);
    }

    function _closeSale() internal {
        tokensToMint = 0;
        isActive = false;
        emit SaleClosed();
    }

    function closeSale() public onlyOwner {
        _closeSale();
    }

    function updateConvertionRate(uint256 _rate) public onlyOwner {
        require (_rate > 0);
        uint256 one = 1e18;
        conversionRate = one.div(_rate);
    }

    function mint(address _beneficiary, uint256 _amount) internal {
        if (_amount > 0) {
            token.mint(_beneficiary, _amount, "");
        }
    }

    // This function created for easier testing purposes
    function createJaroSleep(address _token, uint256 _dailyTime) internal returns (JaroSleep) {
        return new JaroSleep(_token, _dailyTime);
    }

    function createPersonalTime(address _token, uint256 _dailyTime) internal returns (PersonalTime) {
        return new PersonalTime(_token, _dailyTime);
    }

    // This function created for easier testing purposes
    function getNow() internal view returns (uint256) {
        return now;
    }
}
