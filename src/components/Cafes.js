import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cafes() {
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    const URL = "http://localhost:3001/cafes";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setCafes(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Row>
        {cafes.map((cafe) => (
          <Col key={cafe.id}>
            <h3>{cafe.nombre}</h3>
            <p>{cafe.tipo}</p>
            <p>{cafe.region}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Cafes;
