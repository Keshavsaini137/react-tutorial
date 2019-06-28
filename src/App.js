import React from 'react';

import './App.css';

import Car from './Components/Car';
import Laptop from './Components/Laptop';

function App(){
  return (
    <div className="App">
      <h1>Welcome to the React World!</h1>
      <p>This is my {1 + 1 }nd react project</p>
      <label >keshav</label>

      <Car />
      <Laptop itemsName="Lenovo Laptop"/>
      
    </div>
  );
}

export default App;
