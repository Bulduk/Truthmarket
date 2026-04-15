// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title FluxEscrow
 * @dev Escrow contract for secure payments and conditional releases in FluxMarket.
 */
contract FluxEscrow is Ownable {
    IERC20 public fluxToken;

    struct Escrow {
        address payer;
        address payee;
        uint256 amount;
        bool isReleased;
        bool isRefunded;
    }

    mapping(uint256 => Escrow) public escrows;
    uint256 public nextEscrowId;

    event EscrowCreated(uint256 indexed escrowId, address indexed payer, address indexed payee, uint256 amount);
    event EscrowReleased(uint256 indexed escrowId);
    event EscrowRefunded(uint256 indexed escrowId);

    constructor(address _fluxToken, address initialOwner) Ownable(initialOwner) {
        fluxToken = IERC20(_fluxToken);
    }

    function createEscrow(address payee, uint256 amount) external returns (uint256) {
        require(amount > 0, "Amount must be > 0");
        require(fluxToken.transferFrom(msg.sender, address(this), amount), "Transfer failed");

        uint256 escrowId = nextEscrowId++;
        escrows[escrowId] = Escrow({
            payer: msg.sender,
            payee: payee,
            amount: amount,
            isReleased: false,
            isRefunded: false
        });

        emit EscrowCreated(escrowId, msg.sender, payee, amount);
        return escrowId;
    }

    function releaseEscrow(uint256 escrowId) external {
        Escrow storage e = escrows[escrowId];
        require(msg.sender == e.payer || msg.sender == owner(), "Not authorized");
        require(!e.isReleased && !e.isRefunded, "Already processed");

        e.isReleased = true;
        require(fluxToken.transfer(e.payee, e.amount), "Transfer failed");

        emit EscrowReleased(escrowId);
    }

    function refundEscrow(uint256 escrowId) external {
        Escrow storage e = escrows[escrowId];
        require(msg.sender == e.payee || msg.sender == owner(), "Not authorized");
        require(!e.isReleased && !e.isRefunded, "Already processed");

        e.isRefunded = true;
        require(fluxToken.transfer(e.payer, e.amount), "Transfer failed");

        emit EscrowRefunded(escrowId);
    }
}
