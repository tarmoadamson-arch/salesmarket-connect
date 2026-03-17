import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Partners = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-20 min-h-[60vh] flex flex-col items-center text-center">
      <h1 className="text-h1 mb-4">Agency Partners</h1>
      <p className="text-body-lg text-muted mb-10 max-w-2xl">
        Are you a B2B sales agency? Partner with SalesMarket to distribute your talent to top SaaS companies across Europe.
      </p>
      <Card className="max-w-md w-full p-8 border border-primary/20">
        <h3 className="text-h3 mb-4">Partner Application</h3>
        <p className="text-muted mb-6">Our agency partner program is currently in closed beta.</p>
        <Button variant="primary" className="w-full justify-center" onClick={() => navigate('/contact')}>Contact Us to Apply</Button>
      </Card>
    </div>
  );
};

export default Partners;
