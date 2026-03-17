import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Resources = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-20 min-h-[60vh] flex flex-col items-center text-center">
      <h1 className="text-h1 mb-4">Pro Resources</h1>
      <p className="text-body-lg text-muted mb-10 max-w-2xl">
        Guides, playbooks, and tools to help you close more deals and earn higher commissions.
      </p>
      <Card className="max-w-md w-full p-8 p-10">
        <div className="w-16 h-16 bg-surface-alpha rounded flex items-center justify-center mx-auto mb-6 text-2xl">📚</div>
        <h3 className="text-h3 mb-4">Resource Center</h3>
        <p className="text-muted mb-6">This section is currently under construction and will be available soon exclusively to verified Pros.</p>
        <Button variant="outline" className="w-full justify-center" onClick={() => navigate('/')}>Return Home</Button>
      </Card>
    </div>
  );
};

export default Resources;
