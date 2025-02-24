// SMSAuth.js
import { useState } from 'react';

export default function SMSAuth({ onVerify }) {
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
      <p className="mfa-instructions">We've sent a 6-digit code to your phone</p>
      <form onSubmit={handleSubmit} className="mfa-form">
        <input
          type="text"
          placeholder="Enter SMS code"
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