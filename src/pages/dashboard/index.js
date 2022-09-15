import { Button } from '@mui/material';
import React from 'react';
import { useAuth } from '../../contexts/auth';
import './index.css'

export const Dashboard = () => {
  const {signOut} = useAuth();

  return (
    <div className="container">
        <h1>Dashboard</h1>
        <Button onClick={signOut}>Sair</Button>
    </div>
  );
}