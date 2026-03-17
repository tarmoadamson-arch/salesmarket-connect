import React from 'react';
import './Card.css';

const Card = ({ children, className = '', hoverable = false, glass = false }) => {
  return (
    <div className={`card ${hoverable ? 'card-hoverable' : ''} ${glass ? 'glass-panel' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
