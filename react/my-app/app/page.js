'use client'

import Image from "next/image";
import {useState} from 'react';

function generateRandomNum(){
  return Math.floor(Math.random()*100);
}

export default function Home() {
  const [randomNum, setRandomNum] = useState();

  function handleClick(){
    setRandomNum(generateRandomNum());
  }

  return(
    <div>
      <h1>Número aleatório</h1>
      <button onClick={() => handleClick()}>Gerar número</button>
      <p>{randomNum}</p>
    </div>
  );
}