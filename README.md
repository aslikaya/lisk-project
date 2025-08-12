<div align="left">
  <a href="https://lisk.com"><img alt="Lisk" src="./packages/nextjs/public/readme-banner.png" width="100%"></a>
</div>

<br />

Scaffold-Lisk is a fork of Scaffold-OP with minimal differences, providing additional dApp examples, native support for Superchain testnets, and more low-level instructions. We highly recommend the Scaffold-ETH2 docs as the primary guideline.

🧪 An open-source, up-to-date toolkit for building decentralized applications (dapps) on the Ethereum blockchain. It's designed to make it easier for developers to create and deploy smart contracts and build user interfaces that interact with those contracts.

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, Viem, and Typescript.

- ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
- 🪝 **[Custom hooks](https://docs.scaffoldeth.io/hooks/)**: Collection of React hooks wrapper around [wagmi](https://wagmi.sh/) to simplify interactions with smart contracts with typescript autocompletion.
- 🧱 [**Components**](https://docs.scaffoldeth.io/components/): Collection of common web3 components to quickly build your frontend.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.
- 💼 **BaseFlow Integration**: Complete invoice and inventory management system with AI-powered agents for automated business operations.

<div align="center" style="margin-top: 24px;">
  <img alt="App demo" src="./packages/nextjs/public/scaffold-lisk-landing.png" width="100%">
</div>

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-Lisk, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/LiskHQ/scaffold-lisk.git
cd scaffold-lisk
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On the same terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract test with `yarn hardhat:test`

- Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`
- Edit your frontend in `packages/nextjs/pages`
- Edit your deployment scripts in `packages/hardhat/deploy`

## BaseFlow Features

This project includes BaseFlow, a comprehensive decentralized invoice and inventory management system built on Lisk. 

> **Attribution**: BaseFlow code is adapted from [BaseFlowInventory](https://github.com/Bratipah/BaseFlowInventory) by @Bratipah and integrated into the Scaffold-Lisk framework.

BaseFlow provides:

### 🧠 AI-Powered Agents
- **Sales Agent**: Automated order processing, payment tracking, and customer communication
- **Marketing Agent**: Social media monitoring, campaign management, and engagement analytics  
- **Inventory Agent**: Stock management, demand forecasting, and automated reordering

### 🔗 Smart Contracts
- **BaseFlowCore**: Core invoice and inventory management logic with OpenZeppelin security
- **USDC Integration**: Native support for USDC payments and transactions
- **Owner Management**: Secure ownership controls with two-step ownership transfer

### 📱 Frontend Components
- **Dashboard**: Real-time business metrics and performance analytics
- **Agent Interface**: Chat-based interaction with AI agents
- **Contract Debugging**: Built-in contract interaction through the debug interface

### 🚀 Getting Started with BaseFlow

1. **Access BaseFlow**: Visit `http://localhost:3000/baseflow` after running the development server
2. **Explore Agents**: Navigate through Sales, Marketing, and Inventory agent interfaces
3. **Debug Contracts**: Use `http://localhost:3000/debug` to interact with BaseFlow contracts directly
4. **Create Invoices**: Test invoice creation and payment workflows using the smart contracts

### 🎯 BaseFlow Contract Functions
- `createInvoice(customer, amount, dueDate, metadata)`: Create new invoices
- `payInvoice(invoiceId)`: Process invoice payments via USDC
- `updateInventory(itemId, quantity, price)`: Manage product inventory
- `getInventory(merchant, itemId)`: Query inventory data

## Deploy Contracts to Superchain Testnet(s)

To deploy contracts to a remote testnet (e.g. Optimism Sepolia), follow the steps below:

1. Get Superchain Sepolia ETH from the [Superchain Faucet](https://app.optimism.io/faucet)

2. Inside the `packages/hardhat` directory, copy `.env.example` to `.env`.

   ```bash
   cd packages/hardhat && cp .env.example .env
   ```

3. Edit your `.env` to specify the environment variables. Only specifying the `DEPLOYER_PRIVATE_KEY` is necessary here. The contract will be deployed from the address associated with this private key, so make sure it has enough Sepolia ETH.

   ```bash
   DEPLOYER_PRIVATE_KEY = "your_private_key_with_sepolia_ETH";
   ```

4. Inside `scaffold-lisk`, run

   ```bash
   yarn deploy --network-options
   ```

   Use spacebar to make your selection(s). This command deploys all smart contracts in `packages/hardhat/contracts` to the selected network(s). Alternatively, you can try

   ```bash
   yarn deploy --network networkName
   ```

   Network names are found in `hardhat.config.js`. Please ensure you have enough Sepolia ETH on all these Superchains. If the deployments are successful, you will see the deployment tx hash on the terminal.

### Deploy BaseFlow to Lisk Sepolia

To deploy the BaseFlow contracts specifically to Lisk Sepolia:

1. **Get Lisk Sepolia ETH** from the [Lisk Sepolia Faucet](https://sepolia-faucet.lisk.com/)

2. **Set your private key** in `.env`:
   ```bash
   DEPLOYER_PRIVATE_KEY="0xYOUR_PRIVATE_KEY_HERE"
   ```

3. **Deploy BaseFlow contracts**:
   ```bash
   yarn deploy --network liskSepolia --tags BaseFlow
   ```

4. **Verify deployment**: Check the console output for contract addresses and owner information.

The BaseFlow contracts will be deployed with your address as the owner, giving you full control over the invoice and inventory management system.

## Adding Foundry

Hardhat's NodeJS stack and cleaner deployment management makes it a better default for Scaffold-Lisk.

To add Foundry to Scaffold-Lisk, follow this simple [tutorial](https://hardhat.org/hardhat-runner/docs/advanced/hardhat-and-foundry) by Hardhat. We recommend users who want more robust and faster testing to add Foundry.

## Documentation

We highly recommend visiting the original [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out their [website](https://scaffoldeth.io).
