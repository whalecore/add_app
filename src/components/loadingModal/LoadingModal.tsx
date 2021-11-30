// Заглушка для имитации проведения вычислений и запрета пользователю использования других кнопок

import React, { useEffect, useState } from "react";

import { Modal, ProgressBar } from "react-bootstrap";

interface LoadingModalProps {
  keyboardStatus: boolean;
  onShow: boolean;
}

const LoadingModal = (props: LoadingModalProps): JSX.Element => {
  const [show, setShow] = useState(props.onShow);
  const [prgBar, setPrgBar] = useState(0);

  // В течение 5.6 секунд отображаем данный экран, а также каждую секунду увеличиваем
  // ProgressBar на 20%, после чего очищаем и таймаут и интервал
  useEffect(() => {
    const timer = setInterval(() => {
      setPrgBar((prevState) => {
        if (prevState === 100) return 0;
        return Math.min(prevState + 20);
      });
    }, 1000);
    const timeout = setTimeout(() => {
      setShow(false);
    }, 5600);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      backdrop="static"
      keyboard={props.keyboardStatus}
      className="text-center"
      centered
    >

      <Modal.Title className="mt-2">Производится расчет...</Modal.Title>
      <Modal.Body>Пожалуйста, дождитесь окончания расчета.</Modal.Body>
      <ProgressBar
        className="mb-3 ms-3 me-3"
        animated
        variant="success"
        now={prgBar}
      />
    </Modal>
  );
};

export default LoadingModal;
