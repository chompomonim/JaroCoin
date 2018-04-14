const HDWalletProvider = require("truffle-hdwallet-provider")
const provider = new HDWalletProvider(mnemonic, "https://ropsten.infura.io/jPfrhToAbx8f5682NUPz")

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
      test: {
        host: "localhost",
        port: 8545,
        network_id: "*", // Match any network id
        gas: 6713094
      },
      development: {
        host: "localhost",
        port: 8545,
        network_id: "*",
        gas: 6713094
      },
      ropsten: {
        provider,
        network_id: 3,
        gas: 4500000,
        gasPrice: 4e9
      },
      rsk: {
        host: "localhost",
        port: 4444,
        network_id: "*" // Match any network id
      },
      live: {
        host: "localhost",  // Change into main net node address
        port: 8545,
        network_id: "1",
        gas: 6713094
      }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
