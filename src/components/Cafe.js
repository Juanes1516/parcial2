import React from 'react';
import Card from 'react-bootstrap/Card';
import {FormattedDate} from 'react-intl';

function Cafe(props) {
  return (
    <Card style={{ width: '18rem', height: '24rem' }} className="mb-3">
   
      <Card.Body>
        <Card.Title>{props.cafe.nombre}</Card.Title>
        <Card.Text>
          {props.cafe.tipo}
          {props.cafe.region}
          {props.cafe.notas}
          <FormattedDate
            value={new Date(props.cafe.fecha_cultivo)}
            year='numeric'
            month='long'
            day='numeric'
            weekday='long'
        />
          {props.cafe.altura}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cafe;
