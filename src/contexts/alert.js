import React, { createContext, useState, useContext } from "react";
import { Modal } from "react-responsive-modal";

import _alertType from "../enums/alertType";
import _alertButtonType from "../enums/alertButtonType";

import Alert from "../components/Alert";

const AlertContext = createContext({
  showAlertModal: (message, alertType, buttonType, callback, onDismiss) => {},
});

export default function AlertProvider({ children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [alert, setAlert] = useState({
    show: false,
    type: _alertType.INFORMATION,
    message: "Algo não está certo",
    buttonType: _alertButtonType.CONFIRM,
    callback: () => {},
    onDismiss: () => {},
  });

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  function showAlertModal(
    message = "Algo não está certo",
    alertType = _alertType.INFORMATION,
    buttonType = _alertButtonType.CONFIRM,
    callback = () => {},
    onDismiss = () => {}
  ) {
    setAlert({
      show: true,
      message: message,
      type: alertType,
      buttonType: buttonType,
      callback: callback,
      onDismiss: onDismiss,
    });
    openModal();
  }

  return (
    <AlertContext.Provider value={{ showAlertModal }}>
      <Modal
        open={modalIsOpen}
        onClose={closeModal}
        showCloseIcon={false}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
      >
        {alert.show && (
          <Alert
            message={alert.message}
            onConfirm={() => {
              alert.callback();
              closeModal();
            }}
            onDismiss={() => {
              alert.onDismiss();
              closeModal();
            }}
            type={alert.type}
            buttonType={alert.buttonType}
          />
        )}
      </Modal>
      {children}
    </AlertContext.Provider>
  );
}

export function useAlert() {
  const context = useContext(AlertContext);

  return context;
}
