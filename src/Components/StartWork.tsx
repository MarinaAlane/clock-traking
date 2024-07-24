import React, { useEffect, useState } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import 'moment-timezone';
import { format } from "date-fns";

import { getStartData } from '../Actions/actions.ts';

const StartWork = ({ employeeId } : { employeeId: number}) => {
  const [clockInData, setClockInData] = useState([]);
  const [startWorkData, setStartWorkData] = useState(false);

  // const handleClockIn = async () => {
  //   try {
  //     const now = new Date();
  //   const response = await clockInRegister({ timestamp: now, employeeId }); 
  //   console.log('Clock-in registrado:', response.data.clock_in_time);
  //   } catch (error) {
  //     console.error('Erro ao registrar o horário:', error);
  //   }
  // };

  const handleClockInData = async () => {
    const employeeId = 1
    try {
      console.log(employeeId, '2111111')
      const response = await getStartData(employeeId);
      console.log(response);
      setClockInData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

    useEffect(() => {
    handleClockInData();
  }, []);

  return(
    <>
      <div className="buttonWrapper">
        <Button onClick={handleClockInData}>Início de jornada</Button>
      </div>
      {startWorkData && (
        <>
          {clockInData.length > 0 && (
            <ListGroup className="list-group">
              {clockInData.map((item, index) => (
                <ListGroupItem key={index} className="list-item">
                  {format(new Date(item.date), 'dd/MM/yyyy')} - {item.time}
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </>
      )}
      {/* <Button onClick={handleClockIn}>MARCAR PONTO</Button> */}
    </>
  )
}

export default StartWork;
