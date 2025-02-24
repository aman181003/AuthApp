// MFAContainer.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SMSAuth from './SMSAuth';
import GoogleAuth from './GoogleAuth';
import EmailAuth from './EmailAuth';
import '../Global.css';

export default function MFAContainer() {
  const [mfaMethod, setMfaMethod] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMFAMethod = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const methods = ['sms', 'google', 'email'];
        const randomMethod = methods[Math.floor(Math.random() * methods.length)];
        setMfaMethod(randomMethod);
      } catch (err) {
        setError('Failed to load MFA method');
      } finally {
        setLoading(false);
      }
    };
    fetchMFAMethod();
  }, []);

  const handleVerify = async (code) => {
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.2 ? resolve() : reject('Invalid code');
        }, 1000);
      });
      navigate('/success');
    } catch (err) {
      setError(err || 'Verification failed');
    }
  };

  if (loading) return (
    <div className="page-container">
      <div className="auth-container">
        <div className="loading-spinner large"></div>
      </div>
    </div>
  );

  if (error) return (
    <div className="page-container">
      <div className="auth-container error-container">
        <div className="error-message">{error}</div>
      </div>
    </div>
  );

  return (
    <div className="page-container">
      <div className="auth-container mfa-container">
        <h2 className="auth-heading mfa-heading">Multi-Factor Authentication</h2>
        <div className="mfa-method-container">
          {mfaMethod === 'sms' && <SMSAuth onVerify={handleVerify} />}
          {mfaMethod === 'google' && <GoogleAuth onVerify={handleVerify} />}
          {mfaMethod === 'email' && <EmailAuth onVerify={handleVerify} />}
        </div>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
}