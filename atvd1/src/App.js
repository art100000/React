import './App.css';
import React from 'react';
import { useState } from 'react';
import Dado from './components/Dado';


function App() {
  
  const [number, setNumber] = useState(0);

  function numberGenerate(){
    setNumber(Math.floor(Math.random() * 6 + 1));
  }

  return (
    <div>
          <button onClick={ numberGenerate }>CLique aqui!!</button>
          <Dado valor={ number } />
    </div>
  );
}

export default App;
