/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "BaseBoringBatchable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseBoringBatchable__factory>;
    getContractFactory(
      name: "BoringBatchable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BoringBatchable__factory>;
    getContractFactory(
      name: "BoringFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BoringFactory__factory>;
    getContractFactory(
      name: "BoringOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BoringOwnable__factory>;
    getContractFactory(
      name: "BoringOwnableData",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BoringOwnableData__factory>;
    getContractFactory(
      name: "Domain",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Domain__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Data",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Data__factory>;
    getContractFactory(
      name: "ERC20WithSupply",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20WithSupply__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155TokenReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155TokenReceiver__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IStrictERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStrictERC20__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IMasterContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMasterContract__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IUniswapV3SwapCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3SwapCallback__factory>;
    getContractFactory(
      name: "IUniswapV3Pool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3Pool__factory>;
    getContractFactory(
      name: "IUniswapV3PoolActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolActions__factory>;
    getContractFactory(
      name: "IUniswapV3PoolDerivedState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolDerivedState__factory>;
    getContractFactory(
      name: "IUniswapV3PoolEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolEvents__factory>;
    getContractFactory(
      name: "IUniswapV3PoolImmutables",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolImmutables__factory>;
    getContractFactory(
      name: "IUniswapV3PoolOwnerActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolOwnerActions__factory>;
    getContractFactory(
      name: "IUniswapV3PoolState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolState__factory>;
    getContractFactory(
      name: "ISwapRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISwapRouter__factory>;
    getContractFactory(
      name: "AaveStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AaveStrategy__factory>;
    getContractFactory(
      name: "IIncentivesController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IIncentivesController__factory>;
    getContractFactory(
      name: "ILendingPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILendingPool__factory>;
    getContractFactory(
      name: "IncentivesControllerMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IncentivesControllerMock__factory>;
    getContractFactory(
      name: "IStkAave",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStkAave__factory>;
    getContractFactory(
      name: "LendingPoolMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LendingPoolMock__factory>;
    getContractFactory(
      name: "StkAaveMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StkAaveMock__factory>;
    getContractFactory(
      name: "BalancerHelpersMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BalancerHelpersMock__factory>;
    getContractFactory(
      name: "BalancerPoolMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BalancerPoolMock__factory>;
    getContractFactory(
      name: "BalancerStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BalancerStrategy__factory>;
    getContractFactory(
      name: "BalancerVaultMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BalancerVaultMock__factory>;
    getContractFactory(
      name: "IBalancerHelpers",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBalancerHelpers__factory>;
    getContractFactory(
      name: "IBalancerPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBalancerPool__factory>;
    getContractFactory(
      name: "IBalancerVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBalancerVault__factory>;
    getContractFactory(
      name: "CompoundStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CompoundStrategy__factory>;
    getContractFactory(
      name: "CTokenMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CTokenMock__factory>;
    getContractFactory(
      name: "ICToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICToken__factory>;
    getContractFactory(
      name: "ConvexBoosterMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConvexBoosterMock__factory>;
    getContractFactory(
      name: "ConvexRewardPoolMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConvexRewardPoolMock__factory>;
    getContractFactory(
      name: "ConvexTricryptoStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConvexTricryptoStrategy__factory>;
    getContractFactory(
      name: "ConvexZapMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConvexZapMock__factory>;
    getContractFactory(
      name: "IConvexBooster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IConvexBooster__factory>;
    getContractFactory(
      name: "IConvexRewardPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IConvexRewardPool__factory>;
    getContractFactory(
      name: "IConvexZap",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IConvexZap__factory>;
    getContractFactory(
      name: "CurveMinterMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CurveMinterMock__factory>;
    getContractFactory(
      name: "ICurveMinter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICurveMinter__factory>;
    getContractFactory(
      name: "ITricryptoLiquidityPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITricryptoLiquidityPool__factory>;
    getContractFactory(
      name: "ITricryptoLPGauge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITricryptoLPGauge__factory>;
    getContractFactory(
      name: "ITricryptoLPGetter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITricryptoLPGetter__factory>;
    getContractFactory(
      name: "TricryptoLiquidityPoolMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TricryptoLiquidityPoolMock__factory>;
    getContractFactory(
      name: "TricryptoLPGaugeMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TricryptoLPGaugeMock__factory>;
    getContractFactory(
      name: "TricryptoLPGetter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TricryptoLPGetter__factory>;
    getContractFactory(
      name: "TricryptoStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TricryptoStrategy__factory>;
    getContractFactory(
      name: "INative",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INative__factory>;
    getContractFactory(
      name: "IStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStrategy__factory>;
    getContractFactory(
      name: "IUniswapV2Router01",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router01__factory>;
    getContractFactory(
      name: "IUniswapV2Router02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router02__factory>;
    getContractFactory(
      name: "CurveEthStEthPoolMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CurveEthStEthPoolMock__factory>;
    getContractFactory(
      name: "ICurveEthStEthPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICurveEthStEthPool__factory>;
    getContractFactory(
      name: "IStEth",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStEth__factory>;
    getContractFactory(
      name: "LidoEthStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LidoEthStrategy__factory>;
    getContractFactory(
      name: "StEthMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StEthMock__factory>;
    getContractFactory(
      name: "ERC20Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Mock__factory>;
    getContractFactory(
      name: "SwapperMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SwapperMock__factory>;
    getContractFactory(
      name: "WETH9Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WETH9Mock__factory>;
    getContractFactory(
      name: "ILPStaking",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILPStaking__factory>;
    getContractFactory(
      name: "IRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRouter__factory>;
    getContractFactory(
      name: "IRouterETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRouterETH__factory>;
    getContractFactory(
      name: "IStargateSwapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStargateSwapper__factory>;
    getContractFactory(
      name: "LPStakingMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LPStakingMock__factory>;
    getContractFactory(
      name: "RouterETHMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RouterETHMock__factory>;
    getContractFactory(
      name: "StargateRouterMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StargateRouterMock__factory>;
    getContractFactory(
      name: "StargateStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StargateStrategy__factory>;
    getContractFactory(
      name: "StargateSwapperV3",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StargateSwapperV3__factory>;
    getContractFactory(
      name: "StargateSwapperV3Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StargateSwapperV3Mock__factory>;
    getContractFactory(
      name: "IYearnVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IYearnVault__factory>;
    getContractFactory(
      name: "YearnStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YearnStrategy__factory>;
    getContractFactory(
      name: "YearnVaultMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YearnVaultMock__factory>;
    getContractFactory(
      name: "AssetRegister",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetRegister__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "ERC1155TokenReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155TokenReceiver__factory>;
    getContractFactory(
      name: "IStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStrategy__factory>;
    getContractFactory(
      name: "IWrappedNative",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWrappedNative__factory>;
    getContractFactory(
      name: "IYieldBox",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IYieldBox__factory>;
    getContractFactory(
      name: "NativeTokenFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NativeTokenFactory__factory>;
    getContractFactory(
      name: "BaseERC1155Strategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseERC1155Strategy__factory>;
    getContractFactory(
      name: "BaseERC20Strategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseERC20Strategy__factory>;
    getContractFactory(
      name: "BaseNativeStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseNativeStrategy__factory>;
    getContractFactory(
      name: "BaseStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseStrategy__factory>;
    getContractFactory(
      name: "YieldBox",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YieldBox__factory>;
    getContractFactory(
      name: "YieldBoxURIBuilder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YieldBoxURIBuilder__factory>;

    getContractAt(
      name: "BaseBoringBatchable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseBoringBatchable>;
    getContractAt(
      name: "BoringBatchable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BoringBatchable>;
    getContractAt(
      name: "BoringFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BoringFactory>;
    getContractAt(
      name: "BoringOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BoringOwnable>;
    getContractAt(
      name: "BoringOwnableData",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BoringOwnableData>;
    getContractAt(
      name: "Domain",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Domain>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Data",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Data>;
    getContractAt(
      name: "ERC20WithSupply",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20WithSupply>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155TokenReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155TokenReceiver>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IStrictERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStrictERC20>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IMasterContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMasterContract>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IUniswapV3SwapCallback",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3SwapCallback>;
    getContractAt(
      name: "IUniswapV3Pool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3Pool>;
    getContractAt(
      name: "IUniswapV3PoolActions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolActions>;
    getContractAt(
      name: "IUniswapV3PoolDerivedState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolDerivedState>;
    getContractAt(
      name: "IUniswapV3PoolEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolEvents>;
    getContractAt(
      name: "IUniswapV3PoolImmutables",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolImmutables>;
    getContractAt(
      name: "IUniswapV3PoolOwnerActions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolOwnerActions>;
    getContractAt(
      name: "IUniswapV3PoolState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolState>;
    getContractAt(
      name: "ISwapRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISwapRouter>;
    getContractAt(
      name: "AaveStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AaveStrategy>;
    getContractAt(
      name: "IIncentivesController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IIncentivesController>;
    getContractAt(
      name: "ILendingPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILendingPool>;
    getContractAt(
      name: "IncentivesControllerMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IncentivesControllerMock>;
    getContractAt(
      name: "IStkAave",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStkAave>;
    getContractAt(
      name: "LendingPoolMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LendingPoolMock>;
    getContractAt(
      name: "StkAaveMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StkAaveMock>;
    getContractAt(
      name: "BalancerHelpersMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BalancerHelpersMock>;
    getContractAt(
      name: "BalancerPoolMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BalancerPoolMock>;
    getContractAt(
      name: "BalancerStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BalancerStrategy>;
    getContractAt(
      name: "BalancerVaultMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BalancerVaultMock>;
    getContractAt(
      name: "IBalancerHelpers",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBalancerHelpers>;
    getContractAt(
      name: "IBalancerPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBalancerPool>;
    getContractAt(
      name: "IBalancerVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBalancerVault>;
    getContractAt(
      name: "CompoundStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CompoundStrategy>;
    getContractAt(
      name: "CTokenMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CTokenMock>;
    getContractAt(
      name: "ICToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICToken>;
    getContractAt(
      name: "ConvexBoosterMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConvexBoosterMock>;
    getContractAt(
      name: "ConvexRewardPoolMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConvexRewardPoolMock>;
    getContractAt(
      name: "ConvexTricryptoStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConvexTricryptoStrategy>;
    getContractAt(
      name: "ConvexZapMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConvexZapMock>;
    getContractAt(
      name: "IConvexBooster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IConvexBooster>;
    getContractAt(
      name: "IConvexRewardPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IConvexRewardPool>;
    getContractAt(
      name: "IConvexZap",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IConvexZap>;
    getContractAt(
      name: "CurveMinterMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CurveMinterMock>;
    getContractAt(
      name: "ICurveMinter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICurveMinter>;
    getContractAt(
      name: "ITricryptoLiquidityPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITricryptoLiquidityPool>;
    getContractAt(
      name: "ITricryptoLPGauge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITricryptoLPGauge>;
    getContractAt(
      name: "ITricryptoLPGetter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITricryptoLPGetter>;
    getContractAt(
      name: "TricryptoLiquidityPoolMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TricryptoLiquidityPoolMock>;
    getContractAt(
      name: "TricryptoLPGaugeMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TricryptoLPGaugeMock>;
    getContractAt(
      name: "TricryptoLPGetter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TricryptoLPGetter>;
    getContractAt(
      name: "TricryptoStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TricryptoStrategy>;
    getContractAt(
      name: "INative",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INative>;
    getContractAt(
      name: "IStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStrategy>;
    getContractAt(
      name: "IUniswapV2Router01",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Router01>;
    getContractAt(
      name: "IUniswapV2Router02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Router02>;
    getContractAt(
      name: "CurveEthStEthPoolMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CurveEthStEthPoolMock>;
    getContractAt(
      name: "ICurveEthStEthPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICurveEthStEthPool>;
    getContractAt(
      name: "IStEth",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStEth>;
    getContractAt(
      name: "LidoEthStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LidoEthStrategy>;
    getContractAt(
      name: "StEthMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StEthMock>;
    getContractAt(
      name: "ERC20Mock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Mock>;
    getContractAt(
      name: "SwapperMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SwapperMock>;
    getContractAt(
      name: "WETH9Mock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WETH9Mock>;
    getContractAt(
      name: "ILPStaking",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILPStaking>;
    getContractAt(
      name: "IRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRouter>;
    getContractAt(
      name: "IRouterETH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRouterETH>;
    getContractAt(
      name: "IStargateSwapper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStargateSwapper>;
    getContractAt(
      name: "LPStakingMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LPStakingMock>;
    getContractAt(
      name: "RouterETHMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RouterETHMock>;
    getContractAt(
      name: "StargateRouterMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StargateRouterMock>;
    getContractAt(
      name: "StargateStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StargateStrategy>;
    getContractAt(
      name: "StargateSwapperV3",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StargateSwapperV3>;
    getContractAt(
      name: "StargateSwapperV3Mock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StargateSwapperV3Mock>;
    getContractAt(
      name: "IYearnVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IYearnVault>;
    getContractAt(
      name: "YearnStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YearnStrategy>;
    getContractAt(
      name: "YearnVaultMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YearnVaultMock>;
    getContractAt(
      name: "AssetRegister",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetRegister>;
    getContractAt(
      name: "ERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "ERC1155TokenReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155TokenReceiver>;
    getContractAt(
      name: "IStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStrategy>;
    getContractAt(
      name: "IWrappedNative",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWrappedNative>;
    getContractAt(
      name: "IYieldBox",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IYieldBox>;
    getContractAt(
      name: "NativeTokenFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NativeTokenFactory>;
    getContractAt(
      name: "BaseERC1155Strategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseERC1155Strategy>;
    getContractAt(
      name: "BaseERC20Strategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseERC20Strategy>;
    getContractAt(
      name: "BaseNativeStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseNativeStrategy>;
    getContractAt(
      name: "BaseStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseStrategy>;
    getContractAt(
      name: "YieldBox",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YieldBox>;
    getContractAt(
      name: "YieldBoxURIBuilder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YieldBoxURIBuilder>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}