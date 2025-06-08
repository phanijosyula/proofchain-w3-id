'use client';

import { useState } from 'react';

export default function Home() {
  const [recipient, setRecipient] = useState('');
  const [credential, setCredential] = useState(null);

  async function issueVC() {
    const res = await fetch('/api/issue', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject: recipient,
        credentialType: 'CourseCompletion',
        claim: { name: 'Blockchain Basics', completed: true }
      })
    });
    const data = await res.json();
    setCredential(data.jwt);
  }

  return (
    <main className="p-10">
      <h1 className="text-2xl mb-4">Web3 Identity DApp</h1>
      <input className="border p-2" value={recipient} onChange={e => setRecipient(e.target.value)} placeholder="Recipient DID or Wallet" />
      <button className="ml-2 px-4 py-2 bg-blue-600 text-white" onClick={issueVC}>Issue Credential</button>
      {credential && <pre className="mt-4 text-xs">{credential}</pre>}
    </main>
  );
}
