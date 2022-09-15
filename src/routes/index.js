import React from 'react';
import {useAuth} from '../contexts/auth';
import { Dashboard } from '../dashboard';
import { Login } from '../login';

function Routes() {
  const { signed } = useAuth();
  
  // return <MainLayout />;
  return signed ? <Dashboard /> : <Login />;
}

export default Routes;