import { useState, useEffect, useRef } from 'react';

import { Dice } from './components/Dice.tsx';

import './App.css';

function randomNumber():number {
  return Math.floor(Math.random()*6+1);
}

function App() {
  const [ dice1Num, setDado1Num ] = useState< number >(0);
  const [ dice2Num, setDado2Num ] = useState< number >(0);

  const [ dice1Points, setDice1Points ] = useState< number >(0);
  const [ dice2Points, setDice2Points ] = useState< number >(0);

  const [ dice1Disabled, setDice1Disabled ] = useState< boolean >(false);
  const [ dice2Disabled, setDice2Disabled ] = useState< boolean >(false);

  const [ round, setRound ] = useState< number >(0);

  let prevStateDice1Disabled = useRef(dice1Disabled);
  let prevStateDice2Disabled = useRef(dice2Disabled);

  function checkResult(): void {
    if (dice1Num > dice2Num) {
      setDice1Points(dice1Points+1);
    } 
    else if (dice2Num > dice1Num){
      setDice2Points(dice2Points+1);
    }
  }

  function handleP1ClickButton(): void {
    setDice1Disabled(true);

    const randomNum: number = randomNumber();
    setDado1Num(randomNum);

    console.log("Jogador 1 dado: " + randomNum);
  }
  
  function handleP2ClickButton(): void {
    setDice2Disabled(true);

    const randomNum: number = randomNumber();
    setDado2Num(randomNum);

    console.log("Jogador 2 dado: " + randomNum);
  }

  function handlePlayAgainButton(): void {
    setRound(1);

    setDice1Points(0);
    setDice2Points(0);

    setDice1Disabled(false);
    setDice2Disabled(false);

    setDado1Num(0);
    setDado2Num(0);
  }

  useEffect(() => {
    if (prevStateDice1Disabled.current !== dice1Disabled && prevStateDice2Disabled.current !== dice2Disabled){
      setDice1Disabled(false);
      setDice2Disabled(false);
      
      setRound(round+1);
  
      checkResult();
    }

  }, [ dice1Disabled, dice2Disabled ]);

  return (
    <div className='App'>
      <h1>Jogo de Dados</h1>
      <p><i>Neste jogo cada jogador deve rolar um dado. Quem tirar o maior número vence a rodada.</i></p>
      <h2>{ round }° Rodada</h2>

      <div className="game__container">
        <div className="player__container">
          <h2>Jogador 1</h2>
          <Dice side={ dice1Num } />
          <button 
            id="player1_btn" 
            onClick={ handleP1ClickButton } 
            disabled={ dice1Disabled || (round >= 5) }>
            Rolar dado
          </button>
        </div>
        <div className="player__container">
          <h2>Jogador 2</h2>
          <Dice side={ dice2Num } />
          <button 
            id="player1_btn" 
            onClick={ handleP2ClickButton } 
            disabled={ dice2Disabled || (round >= 5) }>
            Rolar dado
          </button>
        </div> 
      </div>

      <div className='footer__container'>
          <h3>Placar { dice1Points } x { dice2Points }</h3> 
          <div className='results__container'>
            <p>{ (dice1Points > dice2Points) && (round >= 5) && 'Jogador 1 ganhou!' }</p>
            <p>{ (dice2Points > dice1Points) && (round >= 5) && 'Jogador 2 ganhou!' }</p>
            <p>{ dice1Points == dice2Points && (round >= 5) && 'Empate!'}</p>
          </div>
          <button 
            id="playagain_btn" 
            onClick={ handlePlayAgainButton } 
            disabled={ (round >= 5) ? false : true }>
            Jogar Novamente
          </button>
        </div>
    </div>
  )
}

export default App