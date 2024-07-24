import React from "react";
import Clock from 'react-live-clock';
import 'moment-timezone';

import "./Header.styles.css";

const Header = () => {

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
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'America/Sao_Paulo'} />
      </div>
    </>
  )
}

export default Header;
