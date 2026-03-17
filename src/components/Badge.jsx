import React from 'react';
import './Badge.css';
import { ShieldCheck } from 'lucide-react';

const Badge = ({ children, variant = 'primary', className = '', icon = false }) => {
  return (
    <span className={`badge badge-${variant} ${className}`}>
      {icon && <ShieldCheck size={14} className="badge-icon" />}
      {variant === 'top-percentile' && <span className="premium-shimmer"></span>}
      {children}
    </span>
  );
};

export default Badge;
