pragma solidity 0.4.19;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";

import "./JaroCoinToken.sol";

contract JaroCoinCrowdsale is Ownable {
    using SafeMath for uint256;

    address public constant WALLET = 0x349250f2ef90c60d0f8773f64bd8a9cdffb9e3cc;
    address public constant SLEEP_TOKENS = 0x349250f2ef90c60d0f8773f64bd8a9cdffb9e3cc;
    address public constant FAMILY_TOKENS = 0x349250f2ef90c60d0f8773f64bd8a9cdffb9e3cc;

    uint256 public constant START_TIME = 1522584000;  // Time for first token sale - 2018/04/01 12:00 UTC +0
    uint256 public constant ONE_MONTH = 2592000;      // One month

    // Pre sale tokens - my current liabilities + supporters tokens
    uint256 public constant PRE_SALE_AMOUNT = 840000; // 4% of first 21 000 000 tokens

    // Max tokens which can be in circulation
    uint256 public constant MAX_AMOUNT = 21000000e8;  // 21 000 000
    uint256 public rate = 100000;                     // number of tokens buyer gets per satoshi
    uint256 public conversionRate = 17e10;            // wei per satoshi - per ETH => 0.056 ETH/BTC ? wei per satoshi?

    JaroCoinToken public token;
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

    function JaroCoinCrowdsale(address _owner) public {
        token = new JaroCoinToken();
        startSale(START_TIME);
        transferOwnership(_owner);
    }

    // fallback function can be used to buy tokens or claim refund
    function () external payable {
        buyTokens(msg.sender);
    }

    function buyTokens(address _beneficiary) public payable {
        require(_beneficiary != address(0));
        require(isActive);
        require (msg.value > 0);
        require (saleStartTime > getNow());

        uint256 weiAmount = msg.value;
        uint256 satoshiAmount = weiAmount.div(conversionRate);
        uint256 tokens = satoshiAmount.mul(rate);

        // Mint tokens and refund not used ethers in case when max amount reached during this minting
        uint256 excess = appendContribution(_beneficiary, tokens);
        uint256 refund = (excess > 0 ? excess.div(rate).mul(conversionRate) : 0);
        weiAmount = weiAmount.sub(refund);
        satoshiRaised = satoshiRaised.add(weiAmount.mul(conversionRate));

        // // if hard cap reached, no more tokens to mint, refund sender not used ethers
        if (refund > 0) {
            msg.sender.transfer(refund);
        }

        TokenPurchase(msg.sender, _beneficiary, weiAmount, tokens.sub(excess));

        // // Send ethers into WALLET
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
        require (_startTime.sub(saleStartTime) > ONE_MONTH); // Minimum one month between token sales
        tokensToMint = MAX_AMOUNT.sub(token.totalSupply());
        saleStartTime = _startTime;
        isActive = true;
        SaleActivated(_startTime, tokensToMint);
    }

    function _closeSale() internal {
        tokensToMint = 0;
        isActive = false;
        SaleClosed();
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
            token.mint(_beneficiary, _amount);
        }
    }

    function getNow() internal view returns (uint256) {
        return now;
    }
}