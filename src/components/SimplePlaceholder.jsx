import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const SimplePlaceholder = ({ title, description, icon = "🚀" }) => {
  const navigate = useNavigate();
  return (
    <div className="container py-20 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-h1 mb-4">{title}</h1>
      <p className="text-body-lg text-muted mb-8 max-w-2xl">{description}</p>
      <Card className="max-w-md w-full p-10">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-h3 mb-2">Coming Soon</h3>
        <p className="text-muted mb-6">We are currently building out this section of the platform.</p>
        <Button variant="outline" className="w-full justify-center" onClick={() => navigate('/')}>Return Home</Button>
      </Card>
    </div>
  );
};

export default SimplePlaceholder;
