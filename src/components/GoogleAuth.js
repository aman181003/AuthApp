// GoogleAuth.js
import { useState } from 'react';

export default function GoogleAuth({ onVerify }) {
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
      <p className="mfa-instructions">Enter code from Google Authenticator</p>
      <div className="qr-placeholder">
        <span className="qr-placeholder-text">QR Code Placeholder</span>
      </div>
      <form onSubmit={handleSubmit} className="mfa-form">
        <input
          type="text"
          placeholder="6-digit code"
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