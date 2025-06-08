const express = require('express');
const { EthrDID } = require('ethr-did');
const { createVerifiableCredentialJwt } = require('did-jwt-vc');
require('dotenv').config();

const app = express();
app.use(express.json());

const did = new EthrDID({ identifier: '0xYourDIDAddress', privateKey: process.env.DID_PRIVATE_KEY });

app.post('/issue', async (req, res) => {
  const { subject, credentialType, claim } = req.body;
  const vcPayload = {
    sub: subject,
    nbf: Math.floor(Date.now() / 1000),
    vc: {
      '@context': ['https://www.w3.org/2018/credentials/v1'],
      type: ['VerifiableCredential', credentialType],
      credentialSubject: claim
    }
  };
  const jwt = await createVerifiableCredentialJwt(vcPayload, did);
  res.json({ jwt });
});

app.listen(4000, () => console.log('Issuer API running on http://localhost:4000'));
