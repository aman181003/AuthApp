import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Global.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Validate email format
      if (!/\S+@\S+\.\S+/.test(email)) {
        throw new Error('Invalid email format');
      }

      setSuccess(true);
      setTimeout(() => navigate('/login'), 3000);
    } catch (err) {
      setError(err.message || 'Password reset failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="split-layout">
        <div className="auth-container">
          <h2 className="auth-heading">Password Reset</h2>
          {success ? (
            <div className="success-message">
              <p>Password reset link sent to your email!</p>
              <p>Redirecting to login...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label className="form-label">Registered Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input"
                  disabled={loading}
                />
              </div>

              {error && <div className="error-message">{error}</div>}

              <button 
                type="submit" 
                className="auth-button"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : 'Send Reset Link'}
              </button>

              <p className="auth-alt">
                Remember your password? <Link to="/login" className="auth-link">Login</Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}