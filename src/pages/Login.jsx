import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Card from '../components/Card';
import Button from '../components/Button';
import { Building, User, ArrowRight } from 'lucide-react';
import './Login.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [activeRole, setActiveRole] = useState('client');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill out all fields.');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Mock successful login
      login(activeRole, {
        name: activeRole === 'client' ? 'Acme Corp' : 'Elena Rostova',
        email: email
      });
      setIsLoading(false);
      navigate('/dashboard');
    }, 800);
  };

  return (
    <div className="login-page">
      <div className="container login-container">
        
        <div className="login-visual desktop-only">
          <div className="login-brand">
            <h2 className="text-h2">Sales<span>Market</span></h2>
            <p className="text-body-lg text-muted">Access top-tier B2B sales professionals or find premium client projects.</p>
          </div>
          <div className="login-glass glass-panel">
            <div className="metric-row">
              <div className="metric-dot success"></div>
              <span>Join 500+ verified professionals</span>
            </div>
            <div className="metric-row">
              <div className="metric-dot text-primary"></div>
              <span>Over €50M in pipeline generated</span>
            </div>
          </div>
        </div>

        <div className="login-form-wrapper">
          <Card className="login-card">
            <div className="login-header">
              <h1 className="text-h3">Welcome back</h1>
              <p className="text-muted">Sign in to your account</p>
            </div>

            <div className="role-toggle">
              <button 
                className={`role-btn ${activeRole === 'client' ? 'active' : ''}`}
                onClick={() => setActiveRole('client')}
                type="button"
              >
                <Building size={18} /> I need sales
              </button>
              <button 
                className={`role-btn ${activeRole === 'provider' ? 'active' : ''}`}
                onClick={() => setActiveRole('provider')}
                type="button"
              >
                <User size={18} /> I sell
              </button>
            </div>

            <form onSubmit={handleLogin} className="login-form">
              {error && <div className="login-error">{error}</div>}
              
              <div className="form-group">
                <label htmlFor="email">Work Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder={activeRole === 'client' ? 'you@company.com' : 'you@agency.com'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="login-meta">
                <label className="checkbox-label">
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#" className="forgot-link">Forgot password?</a>
              </div>

              <Button 
                variant="primary" 
                className="w-full login-submit-btn" 
                disabled={isLoading}
                type="submit"
              >
                {isLoading ? 'Signing in...' : 'Sign in'} <ArrowRight size={18} />
              </Button>
            </form>

            <div className="login-footer">
              <p className="text-body-sm text-muted">
                Don&apos;t have an account? <a href="#" className="signup-link">Sign up</a>
              </p>
              <p className="login-demo-note text-body-sm">(Demo: Any credentials will work)</p>
            </div>
          </Card>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
