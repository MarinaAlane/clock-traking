import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import 'moment-timezone';

import { getTotalHours } from '../../Actions/actions.ts';
import "../../Components/StartWork/StartWork.styles.css";

const TotalHours = ({ employeeId } : { employeeId: number}) => {
  const [summaryData, setSummaryData] = useState([]);
  const [summaryhWorkData, setSummaryWorkData] = useState(false);

  const handleClockOutData = async () => {
    const employeeId = 1
    try {
      const response = await getTotalHours(employeeId);
      setSummaryData(response.data);
      setSummaryWorkData(true)
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

    useEffect(() => {
    handleClockOutData();
  }, []);

  return(
    <>
      {summaryhWorkData && (
        <div className="list">
          <h2>Total de horas trabalhadas por dia</h2>
          {summaryData.length > 0 && (
            <ListGroup className="list-group">
              {summaryData.map((item, index) => (
                <ListGroupItem key={index} className="list-item">
                  {item.date} - {item.hours}
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </div>
      )}
    </>
  )
}

export default TotalHours;
