import React from "react";
import Clock from 'react-live-clock';

import "./mainPage.styles.css"
import { Button, ButtonGroup } from "react-bootstrap";

const InitialPage = () => {
  return(
    <>
    <div className="header_wrapper">
      <div className="user_info">
      <h4>Bem vindo, Fulano!</h4>
      <p>#45855</p>
      </div>
      <h1> Registros de ponto</h1>
    </div>
      <div className="divider" />
      <div className="clock">
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'YOUR_TIMEZONE'} />
      </div>
      <div className="buttonWrapper">
        <Button>Início de jornada</Button>
        <Button>Fim de jornada</Button>
        <Button>Total de horas</Button>
      </div>
    </>
  )
}

export default InitialPage;
