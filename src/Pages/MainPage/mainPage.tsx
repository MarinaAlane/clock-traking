import React, { useEffect, useState } from "react";
import Clock from 'react-live-clock';
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import 'moment-timezone';
import axios from "axios";

import "./mainPage.styles.css"
import { format } from "date-fns";
import Header from '../../Components/Header.tsx';
import StartWork from "../../Components/StartWork.tsx";

const InitialPage = ({ employeeId }) => {
  const [clockInData, setClockInData] = useState([]);
  const [startWorkData, setStartWorkData] = useState(false);
  const [finishWork, setFinishWork] = useState(false)

  // const handleClockIn = async () => {
  //   try {
  //     const now = new Date();
  //   const response = await clockInRegister({ timestamp: now, employeeId }); 
  //   console.log('Clock-in registrado:', response.data.clock_in_time);
  //   } catch (error) {
  //     console.error('Erro ao registrar o horário:', error);
  //   }
  // };

  // const handleClockInData = async () => {
  //   const employeeId = 1;
  //   try {
  //     const response = await getStartData(employeeId);
  //     const { data } = response;
  //     setClockInData(data);
  //     setStartWorkData(true);
  //   } catch (error) {
  //     console.error('Erro ao registrar o horário:', error);
  //   }
  // };

  return(
    <>
      <Header/>
      <StartWork />
      {/* <Button onClick={handleClockIn}>MARCAR PONTO</Button> */}
    </>
  )
}

export default InitialPage;
