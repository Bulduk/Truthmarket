// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title FluxNFT
 * @dev ERC721 Token for FluxMarket Content.
 * Features: URI Storage (IPFS), ERC2981 Royalties (5% to creator).
 */
contract FluxNFT is ERC721, ERC721URIStorage, ERC2981, Ownable {
    uint256 private _nextTokenId;

    // 500 basis points = 5%
    uint96 public constant ROYALTY_FEE_NUMERATOR = 500;

    event ContentMinted(uint256 indexed tokenId, address indexed creator, string uri);

    constructor(address initialOwner) 
        ERC721("FluxContent", "FLUXC") 
        Ownable(initialOwner) 
    {}

    /**
     * @dev Mints a new content NFT.
     * @param to The address of the creator/receiver.
     * @param uri The IPFS URI containing content metadata.
     */
    function mintContent(address to, string memory uri) public returns (uint256) {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        
        // Set default royalty for this token to the creator (to) at 5%
        _setTokenRoyalty(tokenId, to, ROYALTY_FEE_NUMERATOR);

        emit ContentMinted(tokenId, to, uri);
        return tokenId;
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage, ERC2981)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
