import React from 'react'; //en la sintaxis anterior, esto se hacía: import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component { // Component, que es una clase de React
  render() { //como regla, un componente siempre tiene el rol de hace 'render' de al menos una cosa
        return ( // es render, se hace por medio de un return, que retorna una pieza de HTML
          <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            </header>
          </div>)
  }
}

export default App;
