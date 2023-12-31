import { expect } from 'chai';
import { ethers } from 'hardhat';
import { registerMocks } from '../test.utils';
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';

describe('ConvexStrategy test', () => {
    it('should test initial strategy values', async () => {
        const { convexTricryptoStrategy, weth } = await loadFixture(
            registerMocks,
        );

        const name = await convexTricryptoStrategy.name();
        const description = await convexTricryptoStrategy.description();

        expect(name).eq('Convex-Tricrypto');
        expect(description).eq(
            'Convex-Tricrypto strategy for wrapped native assets',
        );

        const contractAddress = await convexTricryptoStrategy.contractAddress();
        expect(contractAddress.toLowerCase()).eq(weth.address.toLowerCase());

        const boosterAddress = await convexTricryptoStrategy.booster();
        expect(boosterAddress).to.not.eq(ethers.constants.AddressZero);

        const zapAddress = await convexTricryptoStrategy.zap();
        expect(zapAddress).to.not.eq(ethers.constants.AddressZero);

        const rewardPoolAddress = await convexTricryptoStrategy.rewardPool();
        expect(rewardPoolAddress).to.not.eq(ethers.constants.AddressZero);

        const currentBalance = await convexTricryptoStrategy.currentBalance();
        expect(currentBalance.eq(0)).to.be.true;

        const queued = await weth.balanceOf(convexTricryptoStrategy.address);
        expect(queued.eq(0)).to.be.true;
    });

    it('should allow setting the deposit threshold', async () => {
        const { convexTricryptoStrategy, weth, yieldBox } = await loadFixture(
            registerMocks,
        );

        const currentThreshold =
            await convexTricryptoStrategy.depositThreshold();

        const newThreshold = ethers.BigNumber.from((1e18).toString()).mul(10);
        await convexTricryptoStrategy.setDepositThreshold(newThreshold);

        const finalThreshold = await convexTricryptoStrategy.depositThreshold();

        expect(currentThreshold).to.not.eq(finalThreshold);
    });

    it('should allow setting swapper', async () => {
        const { convexTricryptoStrategy, swapperMock } = await loadFixture(
            registerMocks,
        );

        await convexTricryptoStrategy.setMultiSwapper(swapperMock.address);
        const finalSwapper = await convexTricryptoStrategy.swapper();
        expect(finalSwapper.toLowerCase()).eq(
            swapperMock.address.toLowerCase(),
        );
        expect(finalSwapper.toLowerCase()).to.eq(
            swapperMock.address.toLowerCase(),
        );
    });

    it('should queue and deposit when threshold is met', async () => {
        const {
            convexTricryptoStrategy,
            weth,
            wethAssetId,
            yieldBox,
            deployer,
            timeTravel,
        } = await loadFixture(registerMocks);

        const lpToken = await convexTricryptoStrategy.lpToken();
        const lpTokenContract = await ethers.getContractAt(
            'ERC20Mock',
            lpToken,
        );

        await yieldBox.registerAsset(
            1,
            weth.address,
            convexTricryptoStrategy.address,
            0,
        );

        const wethStrategyAssetId = await yieldBox.ids(
            1,
            weth.address,
            convexTricryptoStrategy.address,
            0,
        );
        const amount = ethers.BigNumber.from((1e18).toString()).mul(10);
        await convexTricryptoStrategy.setDepositThreshold(amount.mul(3));

        await timeTravel(86401);
        await weth.freeMint(amount.mul(10));
        await timeTravel(86401);
        await weth.approve(yieldBox.address, ethers.constants.MaxUint256);

        let share = await yieldBox.toShare(wethStrategyAssetId, amount, false);
        await yieldBox.depositAsset(
            wethStrategyAssetId,
            deployer.address,
            deployer.address,
            0,
            share,
        );

        let strategyWethBalance = await weth.balanceOf(
            convexTricryptoStrategy.address,
        );
        let poolBalance = await lpTokenContract.balanceOf(
            await convexTricryptoStrategy.rewardPool(),
        );
        expect(strategyWethBalance.gt(0)).to.be.true;
        expect(poolBalance.eq(0)).to.be.true;
        share = await yieldBox.toShare(
            wethStrategyAssetId,
            amount.mul(3),
            false,
        );
        await yieldBox.depositAsset(
            wethStrategyAssetId,
            deployer.address,
            deployer.address,
            0,
            share.mul(3),
        );
        strategyWethBalance = await weth.balanceOf(
            convexTricryptoStrategy.address,
        );
        poolBalance = await lpTokenContract.balanceOf(
            await convexTricryptoStrategy.rewardPool(),
        );
        expect(strategyWethBalance.eq(0)).to.be.true;
        expect(poolBalance.gt(0)).to.be.true;
    });

    it('should allow setting lp getter', async () => {
        const { convexTricryptoStrategy, deployTricryptoLPGetter, weth } =
            await loadFixture(registerMocks);

        const liquidityPoolMock = await (
            await ethers.getContractFactory('TricryptoLiquidityPoolMock')
        ).deploy(weth.address);
        await liquidityPoolMock.deployed();
        const newTricryptoLpGetterDeployment = await deployTricryptoLPGetter(
            liquidityPoolMock.address,
            weth.address,
            weth.address,
            weth.address,
        );
        await convexTricryptoStrategy.setTricryptoLPGetter(
            newTricryptoLpGetterDeployment.tricryptoLPGtter.address,
        );

        const finalLpGetter = await convexTricryptoStrategy.lpGetter();
        expect(finalLpGetter.toLowerCase()).to.eq(
            newTricryptoLpGetterDeployment.tricryptoLPGtter.address.toLowerCase(),
        );
    });

    it('should allow deposits and withdrawals', async () => {
        const {
            convexTricryptoStrategy,
            weth,
            wethAssetId,
            yieldBox,
            deployer,
            timeTravel,
            cvxReward1Token,
            cvxReward2Token,
            __uniFactory,
            __uniRouter,
            uniV2EnvironnementSetup,
        } = await loadFixture(registerMocks);


        if (await cvxReward1Token?.hasMintRestrictions()) {
            await cvxReward1Token?.toggleRestrictions();
        }

        if (await cvxReward2Token?.hasMintRestrictions()) {
            await cvxReward2Token?.toggleRestrictions();
        }

        const rewardToken = await ethers.getContractAt(
            'ERC20Mock',
            await convexTricryptoStrategy.rewardToken(),
        );

        if (await rewardToken.hasMintRestrictions()) {
            await rewardToken.toggleRestrictions();
        }

        const pairAmount = ethers.BigNumber.from(1e6).mul((1e18).toString());

        await uniV2EnvironnementSetup(
            deployer.address,
            __uniFactory,
            __uniRouter,
            cvxReward1Token,
            weth,
            pairAmount,
            pairAmount,
        );

        await uniV2EnvironnementSetup(
            deployer.address,
            __uniFactory,
            __uniRouter,
            cvxReward2Token,
            weth,
            pairAmount,
            pairAmount,
        );

        await uniV2EnvironnementSetup(
            deployer.address,
            __uniFactory,
            __uniRouter,
            rewardToken,
            weth,
            pairAmount,
            pairAmount,
        );


        const lpToken = await convexTricryptoStrategy.lpToken();
        const lpTokenContract = await ethers.getContractAt(
            'ERC20Mock',
            lpToken,
        );

        await yieldBox.registerAsset(
            1,
            weth.address,
            convexTricryptoStrategy.address,
            0,
        );

        const strategyAssetId = await yieldBox.ids(
            1,
            weth.address,
            convexTricryptoStrategy.address,
            0,
        );
        expect(strategyAssetId).to.not.eq(wethAssetId);
        const assetsCount = await yieldBox.assetCount();
        const assetInfo = await yieldBox.assets(assetsCount.sub(1));
        expect(assetInfo.tokenType).to.eq(1);
        expect(assetInfo.contractAddress.toLowerCase()).to.eq(
            weth.address.toLowerCase(),
        );
        expect(assetInfo.strategy.toLowerCase()).to.eq(
            convexTricryptoStrategy.address.toLowerCase(),
        );
        expect(assetInfo.tokenId).to.eq(0);

        const amount = ethers.BigNumber.from((1e18).toString()).mul(10);
        await timeTravel(86401);
        await weth.freeMint(amount);
        await timeTravel(86401);
        await weth.approve(yieldBox.address, ethers.constants.MaxUint256);

        let share = await yieldBox.toShare(strategyAssetId, amount, false);
        await yieldBox.depositAsset(
            strategyAssetId,
            deployer.address,
            deployer.address,
            0,
            share,
        );

        const strategyWethBalance = await weth.balanceOf(
            convexTricryptoStrategy.address,
        );
        let poolBalance = await lpTokenContract.balanceOf(
            await convexTricryptoStrategy.rewardPool(),
        );
        expect(strategyWethBalance.eq(0)).to.be.true;
        expect(poolBalance.lte(amount)).to.be.true;
        expect(poolBalance.gt(0)).to.be.true;

        share = await yieldBox.toShare(strategyAssetId, amount, false);
        await yieldBox.withdraw(
            strategyAssetId,
            deployer.address,
            deployer.address,
            0,
            share,
        );
        poolBalance = await lpTokenContract.balanceOf(
            await convexTricryptoStrategy.rewardPool(),
        );
        expect(poolBalance.lte(10)).to.be.true; //
    });

    it('should withdraw from queue', async () => {
        const {
            convexTricryptoStrategy,
            weth,
            wethAssetId,
            yieldBox,
            deployer,
            timeTravel,
        } = await loadFixture(registerMocks);

        const lpToken = await convexTricryptoStrategy.lpToken();
        const lpTokenContract = await ethers.getContractAt(
            'ERC20Mock',
            lpToken,
        );

        await yieldBox.registerAsset(
            1,
            weth.address,
            convexTricryptoStrategy.address,
            0,
        );

        const wethStrategyAssetId = await yieldBox.ids(
            1,
            weth.address,
            convexTricryptoStrategy.address,
            0,
        );
        const amount = ethers.BigNumber.from((1e18).toString()).mul(10);
        await convexTricryptoStrategy.setDepositThreshold(amount.mul(3));

        await timeTravel(86401);
        await weth.freeMint(amount.mul(10));
        await timeTravel(86401);
        await weth.approve(yieldBox.address, ethers.constants.MaxUint256);

        let share = await yieldBox.toShare(wethStrategyAssetId, amount, false);
        await yieldBox.depositAsset(
            wethStrategyAssetId,
            deployer.address,
            deployer.address,
            0,
            share,
        );

        let strategyWethBalance = await weth.balanceOf(
            convexTricryptoStrategy.address,
        );
        let poolBalance = await lpTokenContract.balanceOf(
            await convexTricryptoStrategy.rewardPool(),
        );
        expect(strategyWethBalance.gt(0)).to.be.true;
        expect(poolBalance.eq(0)).to.be.true;

        share = await yieldBox.toShare(wethStrategyAssetId, amount, false);
        await yieldBox.withdraw(
            wethStrategyAssetId,
            deployer.address,
            deployer.address,
            0,
            share,
        );

        strategyWethBalance = await weth.balanceOf(
            convexTricryptoStrategy.address,
        );
        poolBalance = await lpTokenContract.balanceOf(
            await convexTricryptoStrategy.rewardPool(),
        );
        expect(strategyWethBalance.eq(0)).to.be.true;
        expect(poolBalance.eq(0)).to.be.true;
    });

    it('should compound rewards', async () => {
        const {
            convexTricryptoStrategy,
            weth,
            wethAssetId,
            yieldBox,
            deployer,
            timeTravel,
            cvxReward1Token,
            cvxReward2Token,
            __uniFactory,
            __uniRouter,
            uniV2EnvironnementSetup,
        } = await loadFixture(registerMocks);

        if (await cvxReward1Token?.hasMintRestrictions()) {
            await cvxReward1Token?.toggleRestrictions();
        }

        if (await cvxReward2Token?.hasMintRestrictions()) {
            await cvxReward2Token?.toggleRestrictions();
        }

        const pairAmount = ethers.BigNumber.from(1e6).mul((1e18).toString());

        await uniV2EnvironnementSetup(
            deployer.address,
            __uniFactory,
            __uniRouter,
            cvxReward1Token,
            weth,
            pairAmount,
            pairAmount,
        );

        await uniV2EnvironnementSetup(
            deployer.address,
            __uniFactory,
            __uniRouter,
            cvxReward2Token,
            weth,
            pairAmount,
            pairAmount,
        );

        let hasMintRestriction = await weth.hasMintRestrictions();
        if (hasMintRestriction) {
            await weth.toggleRestrictions();
        }
        hasMintRestriction = await weth.hasMintRestrictions();
        expect(hasMintRestriction).to.be.false;

        const lpToken = await convexTricryptoStrategy.lpToken();
        const lpTokenContract = await ethers.getContractAt(
            'ERC20Mock',
            lpToken,
        );

        await yieldBox.registerAsset(
            1,
            weth.address,
            convexTricryptoStrategy.address,
            0,
        );

        const wethStrategyAssetId = await yieldBox.ids(
            1,
            weth.address,
            convexTricryptoStrategy.address,
            0,
        );
        const amount = ethers.BigNumber.from((1e18).toString()).mul(10);
        await convexTricryptoStrategy.setDepositThreshold(amount.div(10000));

        await timeTravel(86401);
        await weth.freeMint(amount.mul(10));
        await timeTravel(86401);
        await weth.approve(yieldBox.address, ethers.constants.MaxUint256);

        const share = await yieldBox.toShare(
            wethStrategyAssetId,
            amount,
            false,
        );
        await timeTravel(86401);
        await yieldBox.depositAsset(
            wethStrategyAssetId,
            deployer.address,
            deployer.address,
            0,
            share,
        );

        let strategyWethBalance = await weth.balanceOf(
            convexTricryptoStrategy.address,
        );
        let poolBalance = await lpTokenContract.balanceOf(
            await convexTricryptoStrategy.rewardPool(),
        );
        expect(strategyWethBalance.eq(0)).to.be.true;
        expect(poolBalance.gt(0)).to.be.true;

        await timeTravel(100 * 86400);

        const abiCoder = new ethers.utils.AbiCoder();
        const extras = abiCoder.encode(
            ['uint256', 'uint256', 'uint256', 'uint256', 'uint256'],
            [0, 0, 0, 0, 0],
        );
        const claimData = abiCoder.encode(
            [
                'address[]',
                'address[]',
                'address[]',
                'address[]',
                'address[]',
                'bytes',
            ],
            [
                [cvxReward1Token?.address, cvxReward2Token?.address],
                [cvxReward1Token?.address, cvxReward2Token?.address],
                [cvxReward1Token?.address, cvxReward2Token?.address],
                [cvxReward1Token?.address, cvxReward2Token?.address],
                [cvxReward1Token?.address, cvxReward2Token?.address],
                extras,
            ],
        );

        await convexTricryptoStrategy.compound(claimData);

        const midPoolBalance = poolBalance;
        strategyWethBalance = await weth.balanceOf(
            convexTricryptoStrategy.address,
        );
        poolBalance = await lpTokenContract.balanceOf(
            await convexTricryptoStrategy.rewardPool(),
        );
        expect(strategyWethBalance.eq(0)).to.be.true;
        expect(poolBalance.gt(midPoolBalance)).to.be.true;

        await timeTravel(100 * 86400);

        await convexTricryptoStrategy.compound(claimData);

        const prevGaugeBalance = poolBalance;
        strategyWethBalance = await weth.balanceOf(
            convexTricryptoStrategy.address,
        );
        poolBalance = await lpTokenContract.balanceOf(
            await convexTricryptoStrategy.rewardPool(),
        );
        expect(strategyWethBalance.eq(0)).to.be.true;
        expect(poolBalance.gt(prevGaugeBalance)).to.be.true;
    });
});
