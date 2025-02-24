// HomePage.js
import { Link } from 'react-router-dom';
import '../Global.css';
import myImage from './business-corporate-protection-safety-security-concept.jpg';


export default function HomePage() {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1 className="logo">SecureAuth</h1>
          <nav className="nav-links">
            <Link to="/login" className="nav-button">Login</Link>
            <Link to="/register" className="nav-button">Register</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">Advanced Multi-Factor Authentication</h2>
            <p className="hero-description">
              Protect your digital identity with our cutting-edge randomized MFA solution. 
              Experience seamless security through:
            </p>
            <ul className="feature-list">
              <li className="feature-item">🔒 Randomized authentication methods</li>
              <li className="feature-item">📱 SMS/Email/Google Authenticator support</li>
              <li className="feature-item">🛡️ Military-grade encryption</li>
              <li className="feature-item">⚡ Instant verification</li>
            </ul>
          </div>
          <div className="hero-image">
  <div className="glow-effect"></div>
  <img 
    src={myImage} 
    alt="Security Concept" 
    className="auth-image" 
  />
</div>
        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>© 2025 SecureAuth. All rights reserved. Protecting your digital life.</p>
      </footer>
    </div>
  );
}