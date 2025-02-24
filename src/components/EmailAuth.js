// EmailAuth.js
import { useState } from 'react';

export default function EmailAuth({ onVerify }) {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onVerify(code);
    setLoading(false);
  };

  return (
    <div className="mfa-method-container">
      <p className="mfa-instructions">Check your email for a verification code</p>
      <form onSubmit={handleSubmit} className="mfa-form">
        <input
          type="text"
          placeholder="Enter email code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="mfa-code-input"
          maxLength="6"
          disabled={loading}
        />
        <button
          type="submit"
          className="auth-button"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="loading-spinner"></span>
              Verifying...
            </>
          ) : 'Verify'}
        </button>
      </form>
    </div>
  );
}