const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const { createVerifiableCredentialJwt } = require('did-jwt-vc');

jest.mock('did-jwt-vc', () => ({
  createVerifiableCredentialJwt: jest.fn().mockResolvedValue('mock.jwt.token')
}));

const app = express();
app.use(bodyParser.json());
app.post('/issue', async (req, res) => {
  const jwt = await createVerifiableCredentialJwt({}, {});
  res.json({ jwt });
});

describe('POST /issue', () => {
  it('returns a JWT credential', async () => {
    const res = await request(app)
      .post('/issue')
      .send({
        subject: '0x1234',
        credentialType: 'CourseCompletion',
        claim: { name: 'Test Course', completed: true }
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.jwt).toBe('mock.jwt.token');
  });
});
