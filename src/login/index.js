import { Button, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import logo from '../assets/logo.jpeg';
import { useAuth } from '../contexts/auth';
import './index.css'

export const Login = () => {
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await signIn({
      username: "luan",
      password: "luan"
    });

    setLoading(false);
  }

  return (
    <div className="background">
      <div className="login-wrapper">
        <img src={logo} alt="logitpo Usfinanças" className="login-logo" />
        {loading ? (
          <div style={{minHeight: '263px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <CircularProgress  color='primary' />
          </div>
        ) : (
          <form onSubmit={submit} className="login-form">
            <div className="input-wrapper">
              <TextField fullWidth id="username" label="Usuário" type="text" />
            </div>
            <div className="input-wrapper">
              <TextField fullWidth id="password" label="Senha" type="password"/>
            </div>
            <div className="buttons-wrapper">
              <Button color="primary" variant="contained" style={{marginBottom: '7px'}} fullWidth type='submit'>Entrar</Button>
              <Button color="secondary" variant="contained" style={{marginBottom: '7px'}} fullWidth >Cadastrar-se</Button>
            </div>
            <div className="link-wrapper">
              <a href="#">Esqueci minha senha</a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}