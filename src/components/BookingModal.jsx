import React, { useState } from 'react';
import { X, Calendar, Clock, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';
import './BookingModal.css';

const MOCK_TIME_SLOTS = [
  '09:00 AM', '09:30 AM', '10:00 AM', '11:30 AM', 
  '01:00 PM', '02:30 PM', '03:00 PM', '04:30 PM'
];

const BookingModal = ({ isOpen, onClose, providerName }) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  if (!isOpen) return null;

  // Generate next 5 mock days
  const upcomingDays = Array.from({ length: 5 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1); // start from tomorrow
    return d;
  });

  const handleClose = () => {
    setStep(1);
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({ name: '', email: '', company: '', message: '' });
    onClose();
  };

  const submitBooking = (e) => {
    e.preventDefault();
    setStep(3); // Success
  };

  return (
    <div className="booking-modal-overlay">
      <div className="booking-modal-content animate-slide-up">
        
        <button className="booking-close-btn" onClick={handleClose}>
          <X size={24} />
        </button>

        {step === 1 && (
          <div className="booking-step">
            <div className="booking-header">
              <h2 className="text-h3">Book Intro Call</h2>
              <p className="text-muted">Select a time to speak with {providerName}</p>
            </div>

            <div className="booking-layout">
              {/* Calendar Column */}
              <div className="booking-calendar">
                <div className="calendar-nav">
                  <button className="cal-nav-btn"><ChevronLeft size={20} /></button>
                  <span className="font-semibold">This Week</span>
                  <button className="cal-nav-btn"><ChevronRight size={20} /></button>
                </div>
                
                <div className="calendar-grid">
                  {upcomingDays.map((date, idx) => {
                    const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
                    return (
                      <button 
                        key={idx}
                        className={`calendar-day ${isSelected ? 'selected' : ''}`}
                        onClick={() => {
                          setSelectedDate(date);
                          setSelectedTime(null);
                        }}
                      >
                        <span className="day-name">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                        <span className="day-number">{date.getDate()}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Times Column */}
              <div className="booking-times">
                {selectedDate ? (
                  <>
                    <div className="times-header text-body-lg font-medium mb-4">
                      {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                    </div>
                    <div className="times-grid">
                      {MOCK_TIME_SLOTS.map(time => (
                        <button 
                          key={time}
                          className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="times-empty text-muted">
                    <Calendar size={32} className="mb-2 opacity-50" />
                    <p>Select a date to view available times.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="booking-footer">
              <Button 
                variant="primary" 
                className="w-full flex justify-center gap-2"
                onClick={() => setStep(2)}
                disabled={!selectedDate || !selectedTime}
              >
                Continue <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="booking-step">
            <div className="booking-header flex items-center justify-between">
              <div>
                <button className="back-link mb-2 flex items-center gap-1 text-primary hover:underline text-sm font-medium" onClick={() => setStep(1)}>
                  <ChevronLeft size={16} /> Back to times
                </button>
                <h2 className="text-h3">Confirm Details</h2>
              </div>
              <div className="selected-slot-summary border border-border rounded-md p-2 bg-surface-base text-sm">
                <div className="flex items-center gap-1 mb-1 font-medium"><Calendar size={14}/> {selectedDate?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
                <div className="flex items-center gap-1 text-muted"><Clock size={14}/> {selectedTime}</div>
              </div>
            </div>

            <form className="booking-form" onSubmit={submitBooking}>
              <div className="form-group mb-3">
                <label>Name</label>
                <input 
                  type="text" 
                  required 
                  className="form-input" 
                  value={formData.name} 
                  onChange={e => setFormData({...formData, name: e.target.value})} 
                  placeholder="Jane Doe" 
                />
              </div>
              
              <div className="form-row mb-3">
                <div className="form-group flex-1">
                  <label>Email</label>
                  <input 
                    type="email" 
                    required 
                    className="form-input" 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                    placeholder="jane@company.com" 
                  />
                </div>
                <div className="form-group flex-1">
                  <label>Company</label>
                  <input 
                    type="text" 
                    required 
                    className="form-input" 
                    value={formData.company} 
                    onChange={e => setFormData({...formData, company: e.target.value})} 
                    placeholder="Acme Inc." 
                  />
                </div>
              </div>

              <div className="form-group mb-4">
                <label>Additional Information (Optional)</label>
                <textarea 
                  className="form-input form-textarea" 
                  rows="3"
                  value={formData.message} 
                  onChange={e => setFormData({...formData, message: e.target.value})} 
                  placeholder="Share a bit about what you're building..."
                ></textarea>
              </div>

              <Button type="submit" variant="primary" className="w-full relative">
                Schedule Event
              </Button>
            </form>
          </div>
        )}

        {step === 3 && (
          <div className="booking-step success-step text-center">
            <div className="success-icon-container mx-auto custom-success-pulse mb-6">
              <CheckCircle2 size={48} className="text-success" />
            </div>
            <h2 className="text-h2 mb-2">Intro call booked successfully!</h2>
            <p className="text-body-lg text-muted mb-6">
              You are scheduled to meet with <strong>{providerName}</strong>.
            </p>

            <div className="booking-summary-card mb-6 text-left bg-surface-base border border-border p-4 rounded-lg">
              <div className="flex items-start gap-3 mb-2">
                <Calendar className="text-primary mt-1" size={20} />
                <div>
                  <div className="font-semibold text-lg">{selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</div>
                  <div className="text-muted">{selectedTime}</div>
                </div>
              </div>
            </div>

            <div className="next-steps-box text-left mb-8 bg-surface-glass border border-border rounded-lg p-4">
               <h4 className="font-semibold mb-3">Next Steps:</h4>
               <ul className="text-sm text-secondary space-y-2">
                 <li className="flex items-start gap-2">
                   <span className="text-primary font-bold">1.</span> 
                   An invite with a Google Meet link has been sent to {formData.email || 'your email'}.
                 </li>
                 <li className="flex items-start gap-2">
                   <span className="text-primary font-bold">2.</span> 
                   {providerName} will review your company details prior to the call.
                 </li>
                 <li className="flex items-start gap-2">
                   <span className="text-primary font-bold">3.</span> 
                   If there&apos;s a mutual fit, you can finalize contracts directly on SalesMarket.
                 </li>
               </ul>
            </div>

            <Button variant="outline" className="w-full" onClick={handleClose}>Back to Profile</Button>
          </div>
        )}

      </div>
    </div>
  );
};

export default BookingModal;
