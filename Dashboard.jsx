import React from 'react';
import UploadVPN from './UploadVPN';
import VPNList from './VPNList';

const Dashboard = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
    <UploadVPN />
    <VPNList />
  </div>
);

export default Dashboard;
