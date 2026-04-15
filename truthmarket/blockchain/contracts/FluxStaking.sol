// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title FluxStaking
 * @dev Staking contract for FLUX token. Users stake FLUX to earn rewards and participate in Oracle validation.
 */
contract FluxStaking is Ownable {
    IERC20 public fluxToken;

    struct StakeInfo {
        uint256 amount;
        uint256 timestamp;
        uint256 rewardDebt;
    }

    mapping(address => StakeInfo) public stakes;
    uint256 public totalStaked;
    uint256 public rewardRate = 100; // Mock reward rate

    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);
    event RewardClaimed(address indexed user, uint256 reward);

    constructor(address _fluxToken, address initialOwner) Ownable(initialOwner) {
        fluxToken = IERC20(_fluxToken);
    }

    function stake(uint256 amount) external {
        require(amount > 0, "Cannot stake 0");
        require(fluxToken.transferFrom(msg.sender, address(this), amount), "Transfer failed");

        StakeInfo storage userStake = stakes[msg.sender];
        
        // Claim pending rewards before adding new stake
        if (userStake.amount > 0) {
            _claimReward(msg.sender);
        }

        userStake.amount += amount;
        userStake.timestamp = block.timestamp;
        totalStaked += amount;

        emit Staked(msg.sender, amount);
    }

    function unstake(uint256 amount) external {
        StakeInfo storage userStake = stakes[msg.sender];
        require(userStake.amount >= amount, "Insufficient stake");

        _claimReward(msg.sender);

        userStake.amount -= amount;
        totalStaked -= amount;

        require(fluxToken.transfer(msg.sender, amount), "Transfer failed");

        emit Unstaked(msg.sender, amount);
    }

    function _claimReward(address user) internal {
        // Mock reward calculation
        StakeInfo storage userStake = stakes[user];
        uint256 timeStaked = block.timestamp - userStake.timestamp;
        uint256 reward = (userStake.amount * timeStaked * rewardRate) / 1e18;

        if (reward > 0) {
            userStake.timestamp = block.timestamp;
            // In a real scenario, rewards would be minted or transferred from a reward pool
            // fluxToken.transfer(user, reward);
            emit RewardClaimed(user, reward);
        }
    }
}
