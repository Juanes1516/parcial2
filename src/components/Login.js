import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom' 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Login(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navi = useNavigate();

  const handleAccept = async (event) => {
    event.preventDefault();
    try {
      const credentials = {
        login: username,
        password: password,
      };
      const response = await axios.post(
        "http://localhost:3001/login",
        credentials
      );
      
      console.log(response.data);

      navi('/cafes');



    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="mx-auto" style={{ width: '18rem' }} >
    <Card.Body className="text-center">
      <Card.Title>Inicio de Sesión</Card.Title>
      <form>
        <div>
          <div>
            <label>Nombre de Usuario</label>
            <input
              className="form-control mt-1"
              placeholder="a.acosta"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button className="btn btn-success" onClick={handleAccept}>
            Ingresar
          </Button>
          <Button className="btn btn-danger">Cancelar</Button>
        </div>
      </form>
      <Card.Text className="mt-3">
        Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico
      </Card.Text>
    </Card.Body>
  </Card>

  );
}

export default Login;
