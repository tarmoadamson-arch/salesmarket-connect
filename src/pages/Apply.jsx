import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import ProfileCard from '../components/ProfileCard';
import { Loader2, CheckCircle2 } from 'lucide-react';
import './Apply.css';

const Apply = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
  };

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call and vetting process
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4); // Success & Preview State
    }, 2500);
  };

  // Convert comma-separated string inputs to arrays for the ProfileCard preview
  const parseList = (str) => str.split(',').map(s => s.trim()).filter(Boolean);

  // Generate a mock profile object based on form input for the preview
  const previewProfile = {
    id: 'preview',
    name: formData.name || 'Your Name',
    role: formData.role || 'Your Title',
    avatar: formData.avatar || 'https://i.pravatar.cc/150?img=11',
    markets: parseList(formData.markets).length ? parseList(formData.markets) : ['Markets'],
    industries: parseList(formData.industries).length ? parseList(formData.industries) : ['Industries'],
    languages: parseList(formData.languages).length ? parseList(formData.languages) : ['ENG'],
    availability: formData.availability || 'Availability',
    isVerified: true,
    top1Percent: false, // Start as standard verified
    metrics: {
      pipeline: formData.pipeline || '€0',
      dealsClosed: formData.dealsClosed || '€0'
    },
    about: formData.about || 'Bio preview...'
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
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="e.g. Jane Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="role">Professional Title</label>
                <input type="text" id="role" name="role" value={formData.role} onChange={handleChange} className="form-input" placeholder="e.g. Senior Enterprise AE" />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="jane@example.com" />
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
              <Button variant="primary" onClick={handleNext} disabled={!formData.name || !formData.role || !formData.email}>Next Step</Button>
            </div>
          </Card>
        )}

        {step === 2 && (
          <Card className="apply-card animate-slide-up">
            <h3 className="apply-step-title">Focus & Experience</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="salesType">Primary Function</label>
                <select id="salesType" name="salesType" value={formData.salesType} onChange={handleChange} className="form-input form-select">
                  <option value="" disabled>Select your core focus...</option>
                  <option value="sdr">Outbound / SDR</option>
                  <option value="ae">Account Executive (Closing)</option>
                  <option value="full">Full-Cycle Sales</option>
                  <option value="leader">Fractional Sales Head</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="experience">Years of B2B Experience</label>
                <input type="number" id="experience" name="experience" value={formData.experience} onChange={handleChange} className="form-input" placeholder="e.g. 5" min="1" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="markets">Markets Covered (Comma separated)</label>
              <input type="text" id="markets" name="markets" value={formData.markets} onChange={handleChange} className="form-input" placeholder="e.g. Nordics, UK, DACH" />
            </div>

            <div className="form-group">
              <label htmlFor="industries">Industry Focus (Comma separated)</label>
              <input type="text" id="industries" name="industries" value={formData.industries} onChange={handleChange} className="form-input" placeholder="e.g. FinTech, B2B SaaS" />
            </div>

            <div className="form-group">
              <label htmlFor="languages">Languages Spoken (Comma separated)</label>
              <input type="text" id="languages" name="languages" value={formData.languages} onChange={handleChange} className="form-input" placeholder="e.g. ENG, FIN, SWE" />
            </div>

            <div className="apply-actions-split">
              <Button variant="ghost" onClick={handlePrev}>Back</Button>
              <Button variant="primary" onClick={handleNext} disabled={!formData.salesType || !formData.markets || !formData.industries}>Next Step</Button>
            </div>
          </Card>
        )}

        {step === 3 && (
          <Card className="apply-card animate-slide-up">
            <h3 className="apply-step-title">Achievements & Availability</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="pipeline">Avg. Pipeline Generated (Annual)</label>
                <input type="text" id="pipeline" name="pipeline" value={formData.pipeline} onChange={handleChange} className="form-input" placeholder="e.g. €2.5M" />
              </div>
              <div className="form-group">
                <label htmlFor="dealsClosed">Total Deals Closed (Annual)</label>
                <input type="text" id="dealsClosed" name="dealsClosed" value={formData.dealsClosed} onChange={handleChange} className="form-input" placeholder="e.g. €800k" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="availability">Preferred Engagement Model</label>
              <select id="availability" name="availability" value={formData.availability} onChange={handleChange} className="form-input form-select">
                <option value="" disabled>Select availability...</option>
                <option value="Full-time">Full-time Contractor</option>
                <option value="20hrs / week">Half-time (20hrs/week)</option>
                <option value="Project-based">Project / Milestone based</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="about">Short Professional Bio</label>
              <textarea id="about" name="about" value={formData.about} onChange={handleChange} className="form-input form-textarea" placeholder="Tell us what you specialize in and what value you bring to clients..."></textarea>
            </div>

            <div className="apply-actions-split">
              <Button variant="ghost" onClick={handlePrev} disabled={isSubmitting}>Back</Button>
              <Button variant="primary" onClick={handleSubmit} disabled={isSubmitting || !formData.availability || !formData.pipeline}>
                {isSubmitting ? <><Loader2 size={16} className="spinner-icon mr-2" /> Submitting...</> : 'Submit Application'}
              </Button>
            </div>
          </Card>
        )}

        {step === 4 && (
          <div className="apply-success-view animate-fade-in">
             <div className="apply-success-header text-center mb-10">
               <div className="success-icon-container mx-auto mb-4">
                 <CheckCircle2 size={40} className="text-success" />
               </div>
               <h2 className="text-h2 mb-2">Application Received!</h2>
               <p className="text-body-lg text-muted max-w-xl mx-auto">
                 Our team will review your application within 24 hours. Here is a preview of how your profile card will look to clients in the marketplace once approved.
               </p>
             </div>

             <div className="apply-preview-container max-w-sm mx-auto pointer-events-none">
               <div className="preview-label text-center text-sm font-bold text-primary mb-4 uppercase tracking-wider opacity-60">Profile Preview</div>
               <ProfileCard profile={previewProfile} />
             </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Apply;
