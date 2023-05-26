import React, { useState } from "react";
import axios from "axios";

function Login(props) {
  const [username, setUserName] = useState("");

  const [password, setPassword] = useState("");

  const handleAccept = async (event) => {
    event.preventDefault();
    try {
      const credenciales = {

        username,
        password,
      };
      const response = await axios.get(
        "http://localhost:3001/login/",
        credenciales
      );
      
      console.log(response.data); 
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div >
      <p>Inicio de Sesión</p>
      <form >
        <div >
          <div >
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
          <button className="btn btn-success" onClick={handleAccept}>
            Ingresar
          </button>
          <button className="btn btn-danger">Cancelar</button>
        </div>
      </form>
      <p>Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico</p>
    </div>
  );
}

export default Login;
