// SuccessPage.js
import { Link } from 'react-router-dom';
import '../Global.css';

export default function SuccessPage() {
  return (
    <div className="page-container">
      <div className="auth-container success-container">
        <div className="success-icon">🎉</div>
        <h1 className="success-heading">Login Successful!</h1>
        <p className="success-text">You've successfully authenticated with two factors</p>
        <Link to="/" className="auth-button success-button">
          Return to Home
        </Link>
      </div>
    </div>
  );
}