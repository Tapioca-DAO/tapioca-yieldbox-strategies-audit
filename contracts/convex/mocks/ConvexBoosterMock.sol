// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "../interfaces/IConvexBooster.sol";
import "../interfaces/IConvexRewardPool.sol";
import "../../../tapioca-mocks/contracts/ERC20Mock.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract ConvexBoosterMock {
    using SafeERC20 for IERC20;

    IERC20 public lpToken;
    IERC20 public receiptToken;
    address public crvRewards;

    constructor(address _lpToken, address _receiptToken, address _crvRewards) {
        lpToken = IERC20(_lpToken);
        receiptToken = IERC20(_receiptToken);
        crvRewards = _crvRewards;

        lpToken.approve(_crvRewards, type(uint256).max);
    }

    function poolInfo(
        uint256
    ) external view returns (IConvexBooster.PoolInfo memory) {
        IConvexBooster.PoolInfo memory info;
        info.lptoken = address(lpToken);
        info.token = address(receiptToken);
        info.gauge = address(0);
        info.crvRewards = crvRewards;
        info.stash = address(0);
        info.shutdown = false;

        return info;
    }

    function deposit(uint256, uint256 _amount, bool) external returns (bool) {
        lpToken.safeTransferFrom(msg.sender, address(this), _amount);

        IConvexRewardPool(crvRewards).stakeFor(msg.sender, _amount);

        return true;
    }
}
