
const { ethers } = require("hardhat");

async function main() {

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const BasedTree = await ethers.getContractFactory("BasedTree");
  const deployedContract = await BasedTree.deploy();
  console.log("Deployed ERC721 contract address:", deployedContract.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
