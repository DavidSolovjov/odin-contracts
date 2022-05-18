const hre = require("hardhat");
const { txHash } = require("./test");

async function main() {
  // Grab the contract factory

  // Start deployment, returning a promise that resolves to a contract object

  let nftaddress; // NFT Address
  let vrfv2address;
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
  console.log(txHash);
  nftaddress = NFT.address;

  const vrfv2 = await VRFV2.deploy();
  await vrfv2.deployed();
  console.log("VRF address:", vrfv2.address);
  console.log(">> s_subscriptionId:", await vrfv2.s_subscriptionId());
  vrfv2address = vrfv2.address;

  // nftaddress = "0xe15328080eec7654fBc3709E1ef80f19b86150F8";
  // const vrfv2address = "0xD685d259D607551D93FFEdA10ec745017Dc2877C";
  // tokenaddress = "0x451d9B9B6A10F877bECfd02dccef35aE475a8FC2";
  // stakingaddress = "0x49A2504ee76167310279dD8e8f4eee505b1d9198";

    const main = await Odin.deploy();
    await main.deployed();
    await main.initialize(nftaddress, uniswaprouteraddress, usdtaddress, vrfv2address, 1652991977);
    console.log("Odin Token:", main.address);
    console.log(">> vrfv2address:", await main.iVRFV2RandomGeneration());
    console.log(">> usdtaddress:", await main.usdtAddress());
    console.log(">> nftaddress:", await main.iODINNFT());
    console.log(">> presaleEndsIn:", await main.presaleEndsIn());
    tokenaddress = main.address;

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

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
