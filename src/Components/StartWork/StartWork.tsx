import React, { useEffect, useState } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import 'moment-timezone';

import { clockInRegister, getStartData } from "../../Actions/actions.ts"

import "./StartWork.styles.css";

const StartWork = ({ employeeId } : { employeeId: number}) => {
  const [clockInData, setClockInData] = useState([]);
  const [startWorkData, setStartWorkData] = useState(false);

  const handleClockIn = async () => {
    try {
      const now = new Date();
    const response = await clockInRegister({ timestamp: now, employeeId }); 
    console.log('Clock-in registrado:', response.data.clock_in_time);
    } catch (error) {
      console.error('Erro ao registrar o horário:', error);
    }
  };

  const handleClockInData = async () => {
    const employeeId = 1
    try {
      const response = await getStartData(employeeId);
      console.log(response);
      setClockInData(response.data);
      setStartWorkData(true)
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

    useEffect(() => {
    handleClockInData();
  }, []);

  return(
    <div className="list">
      <h2>Início de expediente</h2>
      {startWorkData && (
        <>
          {clockInData.length > 0 && (
            <ListGroup className="list-group">
              {clockInData.map((item, index) => (
                <ListGroupItem key={index} className="list-item">
                  {item.date} - {item.time}
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
          <div className="buttonRegistration">
            <Button onClick={handleClockIn}>MARCAR PONTO</Button>
          </div>
      </>
      )}
    </div>
  )
}

export default StartWork;
