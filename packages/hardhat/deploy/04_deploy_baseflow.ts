import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "BaseFlowImplementation" using the deployer account and
 * constructor arguments set to the USDC token address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployBaseFlow: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // USDC token addresses for different networks
  const usdcAddresses: Record<string, string> = {
    // Lisk Sepolia testnet - using a placeholder, should be updated with actual USDC address
    "4202": "0x0000000000000000000000000000000000000000", // Replace with actual USDC address
    // For local development, we can deploy a mock USDC or use a test address
    "31337": "0x0000000000000000000000000000000000000000", // Placeholder for local testing
  };

  const chainId = await hre.getChainId();
  const usdcAddress = usdcAddresses[chainId];

  if (!usdcAddress || usdcAddress === "0x0000000000000000000000000000000000000000") {
    console.log(`⚠️  Warning: USDC address not configured for chain ID ${chainId}`);
    console.log("⚠️  Using placeholder address. Please update with actual USDC contract address.");
  }

  await deploy("BaseFlowImplementation", {
    from: deployer,
    // Contract constructor arguments - USDC token address
    args: [usdcAddress],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  const baseFlowContract = await hre.ethers.getContract<Contract>("BaseFlowImplementation", deployer);
  console.log("🚀 BaseFlow deployed! Owner:", await baseFlowContract.owner());
  console.log("💰 USDC token address:", await baseFlowContract.usdc());
};

export default deployBaseFlow;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags BaseFlow
deployBaseFlow.tags = ["BaseFlow"];
