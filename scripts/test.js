const hre = require("hardhat");
const { PRIVATE_KEY } = process.env;

async function main() {
  // Grab the contract factory

  // Start deployment, returning a promise that resolves to a contract object

  let nftaddress; // NFT Address
  let tokenaddress;
  let stakingaddress;

  // const arg2 = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"; // paymentAddress
  // const arg3 = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"; // payoutAddress
  // let arg4; // Token Address
  // const arg5 = "0xA9cc497e49A0D168b3Bb7F1C5d4b4e44932B33a4"; // Development Address

  const uniswaprouteraddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
  const usdtaddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
  const charityaddress = "0xcE175F9d70F8F4d5e6aD4cF8D62AFFF1510f9552";
  const devaddress = "0xa8d97884b03EfF3b8707ba13B8730839b52000dB";

  // const myNFT = await MyNFT.deploy(arg1, arg2, arg3, arg4, arg5); // Instance of the contract

  const OdinNFT = await hre.ethers.getContractFactory("ODINNFT");
  const OdinStaking = await hre.ethers.getContractFactory("OdinNFTStaking");
  const Odin = await hre.ethers.getContractFactory("Odin");
  const OdinMarketplace = await hre.ethers.getContractFactory(
    "OdinMarketplace"
  );
  const VRFV2 = await hre.ethers.getContractFactory("VRFV2RandomGeneration");

  const NFT = await OdinNFT.deploy();
  console.log("NFT address:", NFT.address);
  await NFT.deployed();
  nftaddress = NFT.address;

  const vrfv2 = await VRFV2.deploy();
  await vrfv2.deployed();
  console.log("VRF address:", vrfv2.address);
  const vrfv2address = vrfv2.address;

  // nftaddress = "0xCA851769093Ad84F89359fec2D5dED781fB021a3";
  // const vrfv2address = "0x30459Ef9724021431B827dE0ED005773F458d2d6";
  // tokenaddress = "0x451d9B9B6A10F877bECfd02dccef35aE475a8FC2";
  // stakingaddress = "0x49A2504ee76167310279dD8e8f4eee505b1d9198";

  //   const main = await Odin.deploy();
  //   await main.deployed();
  //   main.initialize(nftaddress, uniswaprouteraddress, usdtaddress, vrfv2address, 1652170000);
  //   console.log("main:", main.address);
  //   tokenaddress = main.address;

  //   const staking  = await OdinStaking.deploy(nftaddress, tokenaddress, charityaddress);
  //   await staking.deployed();
  //   console.log("staking address:", staking.address);
  //   stakingaddress = staking.address;
  //   main.setStakingAddress(stakingaddress);
  //   console.log("Staking address is set");

  //   const marketplace = await OdinMarketplace.deploy();
  //   await marketplace.deployed();
  //   marketplace.initialize(nftaddress, charityaddress, charityaddress, tokenaddress, devaddress);
  //   console.log("marketplace address:", marketplace.address);
}

const txHash = {
  deployTransaction: {
    hash: "0x656d1349948a9ccc8f46444d11f980adc962672b42b6563b271922dae78d9661",
    type: 2,
    accessList: [],
    blockHash: null,
    blockNumber: null,
    transactionIndex: null,
    confirmations: 0,
    from: "0x438Aa0f9941384Db5331715715050E8C68F72237",
    gasPrice: `BigNumber { value: "1500000012" }`,
    maxPriorityFeePerGas: `BigNumber { value: "1500000000" }`,
    maxFeePerGas: `BigNumber { value: "1500000012" }`,
    gasLimit: `BigNumber { value: "2176461" }`,
    to: null,
    value: `BigNumber { value: "0" }`,
    nonce: 462,
    r: `0x${PRIVATE_KEY}`,
    s: "0x22f9042fa0842c7c69125d86a2e66031a7ffcac0f37bfc3289aa77aef1559976",
    v: 0,
    creates: "0xfFb3e79E9BEaC2A6c2f3AF2a5163EeAC2DfAe3cE",
    chainId: 4,
    wait: `[Function (anonymous)]`
  }
};

module.exports = {
  txHash
};
