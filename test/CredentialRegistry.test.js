const { expect } = require("chai");

describe("CredentialRegistry", function () {
  it("Should issue and retrieve credential", async function () {
    const Registry = await ethers.getContractFactory("CredentialRegistry");
    const registry = await Registry.deploy();
    await registry.deployed();

    const tx = await registry.issueCredential(
      "COURSE101",
      "0x1234",
      "IssuerOrg",
      "ipfs://metadata"
    );
    const receipt = await tx.wait();
    const event = receipt.events.find(e => e.event === "CredentialIssued");
    const credentialId = event.args.id;

    const cred = await registry.credentials(credentialId);
    expect(cred.courseId).to.equal("COURSE101");
    expect(cred.revoked).to.be.false;
  });

  it("Should revoke a credential", async function () {
    const Registry = await ethers.getContractFactory("CredentialRegistry");
    const registry = await Registry.deploy();
    await registry.deployed();

    const tx = await registry.issueCredential(
      "COURSE101",
      "0x1234",
      "IssuerOrg",
      "ipfs://metadata"
    );
    const receipt = await tx.wait();
    const credentialId = receipt.events[0].args.id;

    await registry.revokeCredential(credentialId);
    const cred = await registry.credentials(credentialId);
    expect(cred.revoked).to.be.true;
  });
});
