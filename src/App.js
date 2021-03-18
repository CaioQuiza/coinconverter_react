import React, { Component } from 'react';
import './App.css';
import Conversor from './components/Conversor'

function App() {
  return (
    <div className="App">
      <h1>Conversor de moedas</h1>
      <h4>Por: Caio Eduardo Quiza</h4>
      <div className="linha">
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className="linha">
      <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
      </div>
      <div className="linha">
      <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
      </div>
      <div className="linha">
      <Conversor moedaA="JPY" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="JPY"></Conversor>
      </div>
    </div>
  );
}

export default App;
