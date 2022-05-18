/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
   defaultNetwork: "rinkeby",
   networks: {
      hardhat: {},
      binance: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      },
      rinkeby: {
         url: "https://rinkeby.infura.io/v3/e254d35aa64b4c16816163824d9d5b83",
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
   etherscan: {
      // Your API key for Etherscan
      // Obtain one at https://etherscan.io/
      apiKey: "PU1RT21GVCWED3WJ4I3466VK18TXAZS7XF" //Input your Etherscan API key
   },
   solidity: {
      version: "0.8.7",
      settings: {
         optimizer: {
            enabled: true
         }
      }
   }
}