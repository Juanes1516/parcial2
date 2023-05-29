import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import banner from './images/banner.png';
import Cafes from './components/Cafes';
import Cafe from './components/Cafe';
import { ThemeProvider } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import './components/banner.css'
import './components/login.css'

function App() {
  return (
    <ThemeProvider>
       <div >
        <h1 className= "letra">El Aroma Mágico</h1>
       <img src={banner} class="rounded mx-auto d-block"alt="Responsive image"/>
    

        <Router>
          <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/cafes" element={<Cafes />} />
          <Route path="/cafes/:id" element={<Cafe />} />
          </Routes>
          
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
