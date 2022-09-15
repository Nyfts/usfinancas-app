import React from 'react';
import {useAuth} from '../contexts/auth';
import {Dashboard} from '../pages/dashboard';
import {Login} from '../pages/login';

function Routes() {
  const { signed } = useAuth();
  
  // return <MainLayout />;
  return signed ? <Dashboard /> : <Login />;
}

export default Routes;