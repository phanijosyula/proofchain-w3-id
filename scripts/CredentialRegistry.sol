// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CredentialRegistry {
    struct Credential {
        string courseId;
        string issuedTo;
        string issuer;
        string metadataURI;
        bool revoked;
    }

    mapping(bytes32 => Credential) public credentials;

    event CredentialIssued(bytes32 indexed id, string courseId, string issuedTo);
    event CredentialRevoked(bytes32 indexed id);

    function issueCredential(
        string memory courseId,
        string memory issuedTo,
        string memory issuer,
        string memory metadataURI
    ) public returns (bytes32) {
        bytes32 id = keccak256(abi.encodePacked(courseId, issuedTo, block.timestamp));
        credentials[id] = Credential(courseId, issuedTo, issuer, metadataURI, false);
        emit CredentialIssued(id, courseId, issuedTo);
        return id;
    }

    function revokeCredential(bytes32 id) public {
        require(bytes(credentials[id].courseId).length != 0, "Credential not found");
        credentials[id].revoked = true;
        emit CredentialRevoked(id);
    }
}
