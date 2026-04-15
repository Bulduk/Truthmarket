// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title FluxOracle
 * @dev Integrates Chainlink and Community Oracle for TruthX/FluxMarket verification.
 */
contract FluxOracle is Ownable {
    
    struct OracleRequest {
        uint256 marketId;
        string contentId;
        string oracleType; // "CHAINLINK", "COMMUNITY", "AI"
        bool isResolved;
        string resultData;
    }

    mapping(uint256 => OracleRequest) public requests;
    uint256 public nextRequestId;

    event RequestCreated(uint256 indexed requestId, uint256 indexed marketId, string oracleType);
    event RequestResolved(uint256 indexed requestId, string resultData);

    constructor(address initialOwner) Ownable(initialOwner) {}

    function createRequest(uint256 marketId, string memory contentId, string memory oracleType) external onlyOwner returns (uint256) {
        uint256 requestId = nextRequestId++;
        
        requests[requestId] = OracleRequest({
            marketId: marketId,
            contentId: contentId,
            oracleType: oracleType,
            isResolved: false,
            resultData: ""
        });

        emit RequestCreated(requestId, marketId, oracleType);
        return requestId;
    }

    function resolveRequest(uint256 requestId, string memory resultData) external onlyOwner {
        OracleRequest storage req = requests[requestId];
        require(!req.isResolved, "Already resolved");

        req.isResolved = true;
        req.resultData = resultData;

        emit RequestResolved(requestId, resultData);
    }
}
