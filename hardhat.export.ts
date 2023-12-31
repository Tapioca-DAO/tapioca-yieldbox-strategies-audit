import * as dotenv from 'dotenv';

import '@nomicfoundation/hardhat-toolbox';
import '@nomicfoundation/hardhat-chai-matchers';
import '@nomiclabs/hardhat-vyper';
import { HardhatUserConfig } from 'hardhat/config';
import 'hardhat-deploy';
import 'hardhat-contract-sizer';
import 'hardhat-gas-reporter';
import SDK from 'tapioca-sdk';
import { HttpNetworkConfig } from 'hardhat/types';
require('@primitivefi/hardhat-dodoc');
import 'hardhat-tracer';
import { TAPIOCA_PROJECTS_NAME } from './gitsub_tapioca-sdk/src/api/config';

dotenv.config({ path: './env/.env' });
const { NODE_ENV = 'mainnet' } = process.env;

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        interface ProcessEnv {
            ALCHEMY_API_KEY: string;
        }
    }
}

if (!NODE_ENV || NODE_ENV === '') {
    throw `Please specify witch environment file you want to use\n \
    E.g: NODE_ENV={environmentFileHere} yarn hardhat ${process.argv
        .slice(2, process.argv.length)
        .join(' ')}`;
}
dotenv.config({ path: `./env/${process.env.NODE_ENV}.env` });

type TNetwork = ReturnType<
    typeof SDK.API.utils.getSupportedChains
>[number]['name'];
const supportedChains = SDK.API.utils.getSupportedChains().reduce(
    (sdkChains, chain) => ({
        ...sdkChains,
        [chain.name]: <HttpNetworkConfig>{
            accounts:
                process.env.PRIVATE_KEY !== undefined
                    ? [process.env.PRIVATE_KEY]
                    : [],
            live: true,
            url:
                chain.rpc == 'https://api.avax-test.network/ext/bc/C/rpc'
                    ? 'https://rpc.ankr.com/avalanche_fuji'
                    : chain.rpc.replace(
                          '<api_key>',
                          process.env.ALCHEMY_API_KEY,
                      ),
            gasMultiplier: chain.tags[0] === 'testnet' ? 2 : 1,
            chainId: Number(chain.chainId),
            tags: [...chain.tags],
        },
    }),
    {} as { [key in TNetwork]: HttpNetworkConfig },
);

const chain = supportedChains[NODE_ENV == 'mainnet' ? 'ethereum' : NODE_ENV];

const config: HardhatUserConfig & { dodoc?: any; vyper: any } = {
    SDK: { project: TAPIOCA_PROJECTS_NAME.TapiocaStrategies },
    defaultNetwork: 'hardhat',
    namedAccounts: {
        deployer: 0,
    },
    solidity: {
        compilers: [
            {
                version: '0.6.12',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: '0.7.6',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: '0.8.9',
                settings: {
                    viaIR: true,
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: '0.8.18',
                settings: {
                    viaIR: true,
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
    },
    vyper: {
        compilers: [{ version: '0.2.16' }],
    },

    networks: {
        ...supportedChains,
        hardhat: {
            saveDeployments: false,
            ...(chain?.url && {
                forking: {
                    url: chain.url,
                    ...(process.env.FORKING_BLOCK_NUMBER
                        ? {
                              blockNumber: parseInt(
                                  process.env.FORKING_BLOCK_NUMBER,
                              ),
                          }
                        : null),
                },
            }),
            hardfork: 'merge',
            allowUnlimitedContractSize: true,
            accounts: {
                mnemonic:
                    'test test test test test test test test test test test junk',
                count: 10,
                accountsBalance: '1000000000000000000000',
            },
            tags: ['testnet'],
        },
    },
    dodoc: {
        runOnCompile: false,
        freshOutput: true,
        exclude: [],
    },
    etherscan: {
        apiKey: {
            goerli: process.env.BLOCKSCAN_KEY ?? '',
            arbitrumGoerli: process.env.ARBITRUM_GOERLI_KEY ?? '',
            avalancheFujiTestnet: process.env.AVALANCHE_FUJI_KEY ?? '',
            bscTestnet: process.env.BSC_KEY ?? '',
            polygonMumbai: process.env.POLYGON_MUMBAI ?? '',
            ftmTestnet: process.env.FTM_TESTNET ?? '',
        },
        customChains: [],
    },
    mocha: {
        timeout: 50000000,
    },
    typechain: {
        outDir: 'typechain',
        target: 'ethers-v5',
    },
};

export default config;
