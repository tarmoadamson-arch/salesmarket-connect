import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';
import BookingModal from '../components/BookingModal';
import { CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { DUMMY_PROFILES } from '../data/mockProfiles';
import './PostProject.css';

const PostProject = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedProviderName, setSelectedProviderName] = useState('');
  
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    title: '',
    market: '',
    type: '',
    budget: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3); // Go to Matching loader
  };

  const nextStep = () => setStep(2);
  const prevStep = () => setStep(1);

  // Handle matching animation
  useEffect(() => {
    if (step === 3) {
      const timer = setTimeout(() => {
        setStep(4); // Go to Results
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [step]);

  // Select top 3 profiles mock
  const recommendedProfiles = DUMMY_PROFILES.slice(0, 3);

  const handleBookCall = (name) => {
    setSelectedProviderName(name);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="post-project-page">
      <div className="container">
        
        {step < 3 && (
          <div className="pp-header text-center mb-8">
            <h1 className="text-h2">Post a Sales Requirement</h1>
            <p className="text-body-lg text-muted mt-2">Tell us what you need, and we&apos;ll instantly match you with verified professionals.</p>
            
            <div className="pp-flow-steps flex justify-center items-center gap-4 mt-8 opacity-70 border-t border-border/50 pt-6">
               <span className="font-semibold text-primary">1. Post project</span>
               <ArrowRight size={16} />
               <span>2. Matching</span>
               <ArrowRight size={16} />
               <span>3. Book calls</span>
            </div>
          </div>
        )}

        {step === 1 && (
          <Card className="pp-card animate-fade-in mx-auto max-w-2xl">
            <div className="pp-progress text-sm font-semibold text-primary mb-6">Step 1 of 2: Basics</div>
            
            <div className="form-row mb-4">
              <div className="form-group flex-1">
                <label htmlFor="companyName">Company Name</label>
                <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="e.g., TechFlow SaaS" className="form-input" />
              </div>
              <div className="form-group flex-1">
                <label htmlFor="industry">Industry</label>
                <select id="industry" name="industry" value={formData.industry} onChange={handleChange} className="form-input form-select">
                  <option value="" disabled>Select industry...</option>
                  <option value="saas">B2B SaaS</option>
                  <option value="fintech">FinTech</option>
                  <option value="proptech">PropTech</option>
                  <option value="devtools">DevTools</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group mb-4">
              <label htmlFor="title">Project Title</label>
              <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} placeholder="e.g., SDR for Finland Market Entry" className="form-input" />
            </div>
            
            <div className="form-row mb-4">
              <div className="form-group flex-1">
                <label htmlFor="market">Target Market</label>
                <select id="market" name="market" value={formData.market} onChange={handleChange} className="form-input form-select">
                  <option value="" disabled>Select market...</option>
                  <option value="nordics">Nordics (General)</option>
                  <option value="finland">Finland</option>
                  <option value="sweden">Sweden</option>
                  <option value="baltics">Baltics</option>
                  <option value="cee">CEE / Poland</option>
                  <option value="dach">Germany / DACH</option>
                  <option value="uk">UK</option>
                </select>
              </div>
              <div className="form-group flex-1">
                <label htmlFor="type">Function Needed</label>
                <select id="type" name="type" value={formData.type} onChange={handleChange} className="form-input form-select">
                  <option value="" disabled>Select role...</option>
                  <option value="sdr">SDR (Meetings/Lead Gen)</option>
                  <option value="ae">Account Executive (Closing)</option>
                  <option value="full">Full-cycle Sales</option>
                  <option value="head">Fractional Head of Sales</option>
                </select>
              </div>
            </div>

            <div className="pp-actions mt-6 flex justify-between">
              <Button variant="ghost" type="button" onClick={() => navigate(-1)}>Cancel</Button>
              <Button variant="primary" type="button" onClick={nextStep} disabled={!formData.companyName || !formData.title || !formData.market || !formData.type}>
                Next Details
              </Button>
            </div>
          </Card>
        )}

        {step === 2 && (
          <Card className="pp-card animate-fade-in mx-auto max-w-2xl">
            <div className="pp-progress text-sm font-semibold text-primary mb-6">Step 2 of 2: Scope</div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <label htmlFor="budget">Engagement Model / Budget</label>
                <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="form-input form-select">
                  <option value="" disabled>Select model...</option>
                  <option value="commission">Commission Only (Higher %)</option>
                  <option value="retainer">Base Retainer + Commission</option>
                  <option value="hourly">Hourly/Fixed Project</option>
                </select>
              </div>

              <div className="form-group mb-4">
                <label htmlFor="description">Requirement description</label>
                <textarea 
                  id="description" 
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Describe your product, deal sizes, what a successful engagement looks like..." 
                  className="form-input form-textarea"
                ></textarea>
              </div>

              <div className="pp-actions mt-6 flex justify-between">
                <Button variant="ghost" type="button" onClick={prevStep}>Back</Button>
                <Button variant="primary" type="submit" disabled={!formData.budget || !formData.description}>
                  Find Matches
                </Button>
              </div>
            </form>
          </Card>
        )}

        {step === 3 && (
          <div className="pp-matching-wrapper animate-fade-in">
            <div className="matching-spinner mb-6">
              <Loader2 size={48} className="text-primary spinner-anim" />
            </div>
            <h2 className="text-h2 mb-2">Analyzing Requirements...</h2>
            <p className="text-body-lg text-muted">Matching you with top SalesMarket professionals.</p>
          </div>
        )}

        {step === 4 && (
          <div className="pp-results-wrapper animate-slide-up">
            <div className="pp-results-header">
              <div className="success-icon-container mx-auto mb-4">
                <CheckCircle2 size={32} className="text-success" />
              </div>
              <h2 className="text-h2 mb-2">Matches Found!</h2>
              <p className="text-body-lg text-muted">We found top experts matching your requirement for <strong>{formData.title}</strong>.</p>
            </div>
            
            <div className="pp-flow-steps pp-flow-results">
               <span className="step-muted">1. Post project</span>
               <ArrowRight size={16} className="step-muted" />
               <span className="step-muted">2. Matching</span>
               <ArrowRight size={16} className="step-muted" />
               <span className="step-active">3. Book calls</span>
            </div>

            <div className="matched-profiles-grid">
              {recommendedProfiles.map(profile => (
                <Card key={profile.id} className="matched-profile-card">
                  <div className="mp-avatar-container">
                    <img src={profile.avatar} alt={profile.name} className="mp-avatar" />
                  </div>
                  <div className="mp-info">
                    <div className="mp-header-row">
                      <div>
                        <h3 className="text-h3 mp-name">
                          {profile.name}
                          {profile.top1Percent ? (
                            <Badge variant="top-percentile" icon>Top 1%</Badge>
                          ) : (
                            <Badge variant="verified" icon>Verified</Badge>
                          )}
                        </h3>
                        <p className="mp-role">{profile.role}</p>
                      </div>
                      <div className="mp-metrics">
                        <div className="mp-metric-label">Pipeline Gen</div>
                        <div className="mp-metric-value">{profile.metrics.pipeline}</div>
                      </div>
                    </div>
                    <p className="mp-about">{profile.about}</p>
                    <div className="mp-badges">
                      {profile.markets.map(m => <Badge key={m} variant="neutral">{m}</Badge>)}
                    </div>
                  </div>
                  <div className="mp-actions">
                    <Button variant="primary" className="mp-btn mp-btn-primary" onClick={() => handleBookCall(profile.name)}>
                      Book Intro Call
                    </Button>
                    <Button variant="ghost" className="mp-btn mp-btn-ghost" onClick={() => navigate(`/profile/${profile.id}`)}>
                      View Profile
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="pp-results-footer">
              <Button variant="outline" onClick={() => navigate('/marketplace')}>Browse All Talent</Button>
            </div>
          </div>
        )}

      </div>

      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        providerName={selectedProviderName}
      />
    </div>
  );
};

export default PostProject;
