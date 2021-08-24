const Web3 = require("web3");
const ethers = require("ethers");
const ethProvider = require("eth-provider");
const web3Provider = new Web3(ethProvider());
const provider = new ethers.providers.Web3Provider(web3Provider._provider);

zeroAddress = "0x" + "0".repeat(40);
tokenAddress = "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d";
const abi = [
  // Read-Only Functions
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",

  // Authenticated Functions
  "function transfer(address to, uint amount) returns (bool)",

  // Events
  "event Transfer(address indexed from, address indexed to, uint amount)",
];
const run = async () => {
  //console.log(web3Provider._provider);
  const signer = provider.getSigner();
  //console.log("signer", signer);

  const token = new ethers.Contract(tokenAddress, abi, signer);
  await token.transfer("greenhornet.eth", 1e18);
};

run()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
