import React from "react";
import { Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';

import alertType from "../../enums/alertType";
import alertButtonType from "../../enums/alertButtonType";
import { Warning } from "@mui/icons-material";



export const Alert = ({ message, onConfirm, onDismiss, type, buttonType }) => {
  return (
    <div>
      <div>{switchIcon(type)}</div>
      <div>{message}</div>
      {switchButton(buttonType, onConfirm, onDismiss)}
    </div>
  );
}

function switchIcon(type) {
  switch (type) {
    case alertType.INFORMATION:
      return <InfoIcon color={"#bfbfbf"} />;
    case alertType.WARNING:
      return <WarningIcon color={"#f4cd3d"} />;
    case alertType.ERROR:
      return <ErrorIcon color={"#ea4646"} />;
    default:
      return;
  }
}

function switchButton(type, onConfirm, onDismiss) {
  switch (type) {
    case alertButtonType.CONFIRM:
      return <Button>Continuar</Button>
      // return <Button label="Continuar" onClick={onConfirm} />;
    case alertButtonType.YESNO:
      return (
        <>
          <Button>Sim</Button>
          <Button>Não</Button>
          {/* <Button label="Sim" onClick={onConfirm} style={{minWidth: 100, marginRight: '12.5px'}} />
          <Button label="Não" onClick={onDismiss} style={{minWidth: 100,}} /> */}
        </>
      );
    default:
      return;
  }
}

function AlertMessage({ message, onConfirm, onDismiss, type, buttonType }) {
  return (
    <div>
      <div>{switchIcon(type)}</div>
      <p>{message}</p>
      {switchButton(buttonType, onConfirm, onDismiss)}
    </div>
  );
}

export default AlertMessage;
