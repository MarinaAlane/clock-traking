import React, { useEffect, useState } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import 'moment-timezone';

import { clockOutRegister, getFinishData } from '../../Actions/actions.ts';
import "../StartWork/StartWork.tsx";

const FinishWork = ({ employeeId } : { employeeId: number}) => {
  const [clockOutData, setClockOutData] = useState([]);
  const [finishWorkData, setFinishWorkData] = useState(false);

  const handleClockOut = async () => {
    try {
      const now = new Date();
    const response = await clockOutRegister({ timestamp: now, employeeId }); 
    console.log('Clock-out registrado:', response.data.clock_in_time);
    } catch (error) {
      console.error('Erro ao registrar o horário:', error);
    }
  };

  const handleClockOutData = async () => {
    const employeeId = 1
    try {
      const response = await getFinishData(employeeId);
      console.log(response);
      setClockOutData(response.data);
      setFinishWorkData(true)
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

    useEffect(() => {
    handleClockOutData();
  }, []);

  return(
    <>
      {finishWorkData && (
        <div className="list">
          <h2>Fim de expediente</h2>
          {clockOutData.length > 0 && (
            <ListGroup className="list-group">
              {clockOutData.map((item, index) => (
                <ListGroupItem key={index} className="list-item">
                  {item.date} - {item.time}
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
          <div className="buttonRegistration">
            <Button onClick={handleClockOut}>MARCAR PONTO</Button>
          </div>
        </div>
      )}
    </>
  )
}

export default FinishWork;
