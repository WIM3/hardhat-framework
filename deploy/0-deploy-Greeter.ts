import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

// deploy/0-deploy-Greeter.ts
const deployGreeter: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {
    deployments: { deploy },
    getNamedAccounts,
  } = hre;
  const { deployer } = await getNamedAccounts();

  if (process.env.WITH_PROXY) return;

  await deploy("Greeter", {
    from: deployer,
    args: [],
    log: true,
  });
};

export default deployGreeter;
deployGreeter.tags = ["Greeter"];
