import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cars from './components/cars';



const arr = [
  1, 5, 10
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
      Top Cars 
      <Cars></Cars>
      </header>
    </div>
  );
}

export default App;
