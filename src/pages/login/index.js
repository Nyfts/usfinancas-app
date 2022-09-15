import { Button, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../assets/logo.jpeg';
import { useAuth } from '../../contexts/auth';
import './index.css'
import { useAlert } from '../../contexts/alert';
import alertType from '../../enums/alertType';
import buttonType from '../../enums/alertButtonType';

export const Login = () => {
  const {handleSubmit, register, formState: {errors}} = useForm();
  const {signIn} = useAuth();
  const {showAlertModal} = useAlert();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      await signIn(data);
    } catch(e) {
      console.log(e.message);
      showAlertModal("Usuário ou senha inválidos", alertType.ERROR, buttonType.CONFIRM, () => {}, () => {});
    }
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
          <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <div className="input-wrapper">
              <TextField fullWidth label="Usuário" type="text" helperText={errors.username && 'Usuário inválido'} error={!!errors?.username} {...register("username", {required: true})} />
            </div>
            <div className="input-wrapper">
              <TextField fullWidth label="Senha" type="password" helperText={errors.password && 'Senha inválida'} error={!!errors?.password} {...register("password", {required: true})}/>
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