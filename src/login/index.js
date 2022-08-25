import React from 'react';
import './index.css'

export const Login = () => {
  return (
    <div className="login-wrapper">
      <h1>Usfinanças</h1>
      <form onSubmit={e => e.preventDefault()} className="login-form">
        <div className="input-wrapper">
          <p className="input-title">Usuário</p>
          <input type="text" name="username" />
        </div>
        <div className="input-wrapper">
          <p className="input-title">Senha</p>
          <input type="password" name="password" />
        </div>
        <div className="input-wrapper">
          <button type="submit">Entrar</button>
        </div>
        <a href="#">Esqueci minha senha</a>
      </form>
    </div>
  );
}