// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

// solhint-disable var-name-mixedcase
// solhint-disable func-name-mixedcase

interface ITricryptoLPGauge {
    function crv_token() external view returns (address);

    function deposit(
        uint256 _value,
        address _addr,
        bool _claim_rewards
    ) external;

    function withdraw(uint256 value, bool _claim_rewards) external;

    function claim_rewards(address _addr, address _receiver) external;

    function claimable_tokens(address _addr) external returns (uint256);

    function claimable_reward_write(
        address _addr,
        address _token
    ) external returns (uint256);

    function claimable_reward(
        address _addr,
        address _token
    ) external view returns (uint256);

    function balanceOf(address _addr) external view returns (uint256);
}
