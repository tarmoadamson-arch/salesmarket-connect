import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { Loader2, CheckCircle2 } from 'lucide-react';
import './Apply.css';

const Apply = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    markets: '',
    languages: '',
    industries: '',
    salesType: '',
    experience: '',
    about: '',
    pipeline: '',
    dealsClosed: '',
    availability: '',
    linkedin: '',
    email: '',
    avatar: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const validateStep = (currentStep) => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = 'Full name is required';
      if (!formData.role.trim()) newErrors.role = 'Professional title is required';
      if (!formData.email.trim()) newErrors.email = 'Email address is required';
    } else if (currentStep === 2) {
      if (!formData.salesType) newErrors.salesType = 'Primary function is required';
      if (!formData.markets.trim()) newErrors.markets = 'Markets covered is required';
      if (!formData.industries.trim()) newErrors.industries = 'Industry focus is required';
    } else if (currentStep === 3) {
      if (!formData.pipeline.trim()) newErrors.pipeline = 'Pipeline generated is required';
      if (!formData.availability) newErrors.availability = 'Engagement model is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent double submit
    
    if (validateStep(3)) {
      setIsSubmitting(true);
      // Simulate API call and vetting process
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(4); // Success State
      }, 2500);
    }
  };

  return (
    <div className="apply-page">
      <div className="container apply-container">
        
        {step < 4 && (
          <div className="apply-header">
            <h1 className="text-h1 mb-2">Apply as a Sales Pro</h1>
            <p className="text-body-lg text-muted">Join the exclusive network of top 1% B2B sales professionals in Europe.</p>
            
            <div className="apply-steps-indicator">
              <span className={step >= 1 ? 'active-step' : ''}>1. Basics</span>
              <span className="step-divider"></span>
              <span className={step >= 2 ? 'active-step' : ''}>2. Experience</span>
              <span className="step-divider"></span>
              <span className={step >= 3 ? 'active-step' : ''}>3. Details</span>
            </div>
          </div>
        )}

        {step === 1 && (
          <Card className="apply-card animate-fade-in">
            <h3 className="apply-step-title">Basic Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`form-input ${errors.name ? 'has-error' : ''}`} placeholder="e.g. Jane Doe" />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="role">Professional Title</label>
                <input type="text" id="role" name="role" value={formData.role} onChange={handleChange} className={`form-input ${errors.role ? 'has-error' : ''}`} placeholder="e.g. Senior Enterprise AE" />
                {errors.role && <span className="error-text">{errors.role}</span>}
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`form-input ${errors.email ? 'has-error' : ''}`} placeholder="jane@example.com" />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="linkedin">LinkedIn URL</label>
                <input type="url" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} className="form-input" placeholder="https://linkedin.com/in/..." />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="avatar">Profile Image URL (Optional)</label>
              <input type="url" id="avatar" name="avatar" value={formData.avatar} onChange={handleChange} className="form-input" placeholder="https://..." />
            </div>

            <div className="apply-actions">
              <Button variant="primary" onClick={handleNext}>Next Step</Button>
            </div>
          </Card>
        )}

        {step === 2 && (
          <Card className="apply-card animate-slide-up">
            <h3 className="apply-step-title">Focus & Experience</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="salesType">Primary Function</label>
                <select id="salesType" name="salesType" value={formData.salesType} onChange={handleChange} className={`form-input form-select ${errors.salesType ? 'has-error' : ''}`}>
                  <option value="" disabled>Select your core focus...</option>
                  <option value="sdr">Outbound / SDR</option>
                  <option value="ae">Account Executive (Closing)</option>
                  <option value="full">Full-Cycle Sales</option>
                  <option value="leader">Fractional Sales Head</option>
                </select>
                {errors.salesType && <span className="error-text">{errors.salesType}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="experience">Years of B2B Experience</label>
                <input type="number" id="experience" name="experience" value={formData.experience} onChange={handleChange} className="form-input" placeholder="e.g. 5" min="1" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="markets">Markets Covered (Comma separated)</label>
              <input type="text" id="markets" name="markets" value={formData.markets} onChange={handleChange} className={`form-input ${errors.markets ? 'has-error' : ''}`} placeholder="e.g. Nordics, UK, DACH" />
              {errors.markets && <span className="error-text">{errors.markets}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="industries">Industry Focus (Comma separated)</label>
              <input type="text" id="industries" name="industries" value={formData.industries} onChange={handleChange} className={`form-input ${errors.industries ? 'has-error' : ''}`} placeholder="e.g. FinTech, B2B SaaS" />
              {errors.industries && <span className="error-text">{errors.industries}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="languages">Languages Spoken (Comma separated)</label>
              <input type="text" id="languages" name="languages" value={formData.languages} onChange={handleChange} className="form-input" placeholder="e.g. ENG, FIN, SWE" />
            </div>

            <div className="apply-actions-split">
              <Button variant="ghost" onClick={handlePrev}>Back</Button>
              <Button variant="primary" onClick={handleNext}>Next Step</Button>
            </div>
          </Card>
        )}

        {step === 3 && (
          <Card className="apply-card animate-slide-up">
            <h3 className="apply-step-title">Achievements & Availability</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="pipeline">Avg. Pipeline Generated (Annual)</label>
                <input type="text" id="pipeline" name="pipeline" value={formData.pipeline} onChange={handleChange} className={`form-input ${errors.pipeline ? 'has-error' : ''}`} placeholder="e.g. €2.5M" />
                {errors.pipeline && <span className="error-text">{errors.pipeline}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="dealsClosed">Total Deals Closed (Annual)</label>
                <input type="text" id="dealsClosed" name="dealsClosed" value={formData.dealsClosed} onChange={handleChange} className="form-input" placeholder="e.g. €800k" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="availability">Preferred Engagement Model</label>
              <select id="availability" name="availability" value={formData.availability} onChange={handleChange} className={`form-input form-select ${errors.availability ? 'has-error' : ''}`}>
                <option value="" disabled>Select availability...</option>
                <option value="Full-time">Full-time Contractor</option>
                <option value="20hrs / week">Half-time (20hrs/week)</option>
                <option value="Project-based">Project / Milestone based</option>
              </select>
              {errors.availability && <span className="error-text">{errors.availability}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="about">Short Professional Bio</label>
              <textarea id="about" name="about" value={formData.about} onChange={handleChange} className="form-input form-textarea" placeholder="Tell us what you specialize in and what value you bring to clients..."></textarea>
            </div>

            <div className="apply-actions-split">
              <Button variant="ghost" onClick={handlePrev} disabled={isSubmitting}>Back</Button>
              <Button variant="primary" onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? <><Loader2 size={16} className="spinner-icon mr-2" /> Submitting...</> : 'Submit Application'}
              </Button>
            </div>
          </Card>
        )}

        {step === 4 && (
          <div className="apply-success-view animate-fade-in">
             <div className="apply-success-header text-center mb-10">
               <div className="success-icon-container mx-auto mb-6">
                 <CheckCircle2 size={64} className="text-success" />
               </div>
               <h2 className="text-h2 mb-4">Thanks, {formData.name ? formData.name : 'there'} — your application has been received</h2>
               <div className="max-w-xl mx-auto mb-10 flex flex-col gap-2" style={{ marginTop: '32px', color: '#6b7280', fontSize: '14px' }}>
                 <p>
                   You're joining a vetted network of top 1% B2B sales professionals in Europe.
                 </p>
                 <p>
                   We review applications daily — faster responses for complete profiles.
                 </p>
                 <p style={{ marginTop: '4px' }}>
                   Want to speed things up? <a href="#" className="font-medium" style={{ color: 'var(--color-primary)', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>Connect with us on LinkedIn</a>.
                 </p>
               </div>
               <div className="success-actions flex items-center justify-center gap-4">
                 <Link to="/projects">
                   <Button variant="primary">Browse Projects</Button>
                 </Link>
                 <Link to="/">
                   <Button variant="ghost">Return Home</Button>
                 </Link>
               </div>
             </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Apply;
