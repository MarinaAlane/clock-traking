import React from 'react';
import { ListGroup, ListGroupItem } from "react-bootstrap";
import "./listCustom.styles.css";

const ListCustom = ({ items }) => {
  return (
    <div className="list-wrapper">
      <h3>Dias anteriores</h3>
      <ListGroup className="list-group">
        {items.map((item, index) => (
          <ListGroupItem key={index} className="list-item">
            {console.log(item.date, 'DATA')}
            {item.date} - {item.time}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default ListCustom;
