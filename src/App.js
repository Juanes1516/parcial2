import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import banner from './images/banner.png';
import Cafes from './components/Cafes';

function App() {
  return (
    <div >
    <div className="image-container">
        <img src={banner} alt="Home" />
      </div>
      
      <Login></Login>
    </div>
  );
}

export default App;
