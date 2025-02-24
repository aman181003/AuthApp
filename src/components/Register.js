import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import '../Global.css';

export default function Register() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [passwordValidations, setPasswordValidations] = useState({
    hasMinLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  const passwordRegex = {
    minLength: /^.{6,}$/,
    upperCase: /[A-Z]/,
    lowerCase: /[a-z]/,
    number: /[0-9]/,
    specialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
  };

  useEffect(() => {
    setPasswordValidations({
      hasMinLength: passwordRegex.minLength.test(password),
      hasUpperCase: passwordRegex.upperCase.test(password),
      hasLowerCase: passwordRegex.lowerCase.test(password),
      hasNumber: passwordRegex.number.test(password),
      hasSpecialChar: passwordRegex.specialChar.test(password),
    });
  }, [password]);

  const validatePhoneNumber = (number) => {
    const cleaned = number.replace(/\D/g, '');
    return cleaned.length >= 10;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const errors = [];
      if (!passwordRegex.minLength.test(password)) errors.push('Password must be at least 6 characters');
      if (!passwordRegex.upperCase.test(password)) errors.push('Password needs at least one uppercase letter');
      if (!passwordRegex.lowerCase.test(password)) errors.push('Password needs at least one lowercase letter');
      if (!passwordRegex.specialChar.test(password)) errors.push('Password needs at least one special character');
      if (password !== confirmPassword) errors.push('Passwords do not match');
      if (!validatePhoneNumber(phoneNumber)) errors.push('Invalid phone number');

      if (errors.length > 0) {
        throw new Error(errors.join(', '));
      }

      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      navigate('/mfa');
    } catch (err) {
      setError(err.message.replace(/, /g, '\n')); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="auth-container wide-auth-container">
        <h2 className="auth-heading">Create Account</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          {/* Email Input */}
          <div className="form-group">
            <label className="form-label">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
              disabled={loading}
              autoComplete="email"
            />
          </div>

          {/* Phone Number Input */}
          <div className="form-group">
            <label className="form-label">Phone Number:</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="form-input"
              disabled={loading}
              placeholder="(123) 456-7890"
              pattern="\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}"
            />
          </div>

          {/* Password Input */}
          <div className="form-group">
          <div className="password-guidelines">
              <p className="guideline-title">Password must contain:</p>
              <ul>
                <li className={passwordValidations.hasMinLength ? 'valid' : ''}>
                  ✓ At least 6 characters
                </li>
                <li className={passwordValidations.hasUpperCase ? 'valid' : ''}>
                  ✓ One uppercase letter
                </li>
                <li className={passwordValidations.hasLowerCase ? 'valid' : ''}>
                  ✓ One lowercase letter
                </li>
                <li className={passwordValidations.hasNumber ? 'valid' : ''}>
                  ✓ One number
                </li>
                <li className={passwordValidations.hasSpecialChar ? 'valid' : ''}>
                  ✓ One special character
                </li>
              </ul>
            </div>
            <label className="form-label">Password:</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`form-input ${
                  password.length > 0 ? (
                    Object.values(passwordValidations).every(v => v) ? 'valid' : 'invalid'
                  ) : ''
                }`}
                disabled={loading}
                autoComplete="new-password"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="form-group">
            <label className="form-label">Confirm Password:</label>
            <div className="password-input-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className={`form-input ${
                  confirmPassword.length > 0 ? (
                    password === confirmPassword ? 'valid' : 'invalid'
                  ) : ''
                }`}
                disabled={loading}
                autoComplete="new-password"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {/* Terms Agreement */}
          <label className="terms-agreement">
            <input type="checkbox" required />
            I agree to the <a href="/terms" className="terms-link">Terms of Service</a>
          </label>

          {/* Error Messages */}
          {error && (
            <div className="error-message">
              {error.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          )}

          {/* Submit Button */}
          <button 
            type="submit" 
            className="auth-button"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading-spinner"></span>
                Registering...
              </>
            ) : 'Create Account'}
          </button>
        </form>

        {/* Existing User Prompt */}
        <p className="auth-alt">
          Already have an account? <Link to="/login" className="auth-link">Login here</Link>
        </p>
      </div>
    </div>
  );
}