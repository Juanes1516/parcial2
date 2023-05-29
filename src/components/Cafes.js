import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";

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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th><FormattedMessage id="Name"/></th>
            <th><FormattedMessage id="Type"/></th>
            <th><FormattedMessage id="Region"/></th>
          </tr>
        </thead>
        <tbody>
          {cafes.map((cafe) => (
            <tr key={cafe.id}>
              <td>
                <Link to={`/cafes/${cafe.id}`}>
                  {cafe.nombre}
                </Link>
              </td>
              <td>{cafe.tipo}</td>
              <td>{cafe.region}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cafes;
