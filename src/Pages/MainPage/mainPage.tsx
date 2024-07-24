import React, { useState } from "react";
import { Button } from "react-bootstrap";
import 'moment-timezone';

import Header from '../../Components/Header/Header.tsx';
import StartWork from "../../Components/StartWork/StartWork.tsx";
import FinishWork from "../../Components/FinishWork/FinishWork.tsx";
import TotalHours from "../../Components/TotalHours/TotalHours.tsx";

import "./mainPage.styles.css"

const InitialPage = ({ employeeId }) => {
  const [startWorkData, setStartWorkData] = useState(false);
  const [finishWorkData, setFinishWorkData] = useState(false)
  const [totalHours, setTotalHours] = useState(false)

  const startWork = () =>{
    setStartWorkData(true)
  }

  const finishWork = () =>{
    setFinishWorkData(true)
  }

  const summary = () => {
    setTotalHours(true)
  }

  console.log(finishWork)

  return(
    <>
      <Header/>
      <div className="mainContent">
        <div className="buttonWrapper">
          <Button onClick={startWork}>Início do expediente</Button>
          <Button onClick={finishWork}>Fim do expediente</Button>
          <Button onClick={summary}>Resumo</Button>
        </div>
        <div>
          {startWorkData && ( <StartWork />)}
          {finishWorkData && (<FinishWork />)}
          {totalHours && (<TotalHours />)}
        </div>
      </div>
    </>
  )
}

export default InitialPage;
