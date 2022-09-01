import { Button, TextField } from '@mui/material';
import React from 'react';
import logo from '../assets/logo.jpeg';
import './index.css'

export const Login = () => {
  return (
    <div className="background">
      <div className="login-wrapper">
        <img src={logo} alt="logitpo Usfinanças" className="login-logo" />
        <form onSubmit={e => e.preventDefault()} className="login-form">
          <div className="input-wrapper">
            <TextField fullWidth id="username" label="Usuário" type="text" />
          </div>
          <div className="input-wrapper">
            <TextField fullWidth id="password" label="Senha" type="password" />
          </div>
          <div className="buttons-wrapper">
            <Button color="primary" variant="contained" style={{marginBottom: '7px'}} fullWidth >Entrar</Button>
            <Button color="secondary" variant="contained" style={{marginBottom: '7px'}} fullWidth >Cadastrar-se</Button>
          </div>
          <div className="link-wrapper">
            <a href="#">Esqueci minha senha</a>
          </div>
        </form>
      </div>
    </div>
  );
}