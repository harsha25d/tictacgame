
import './App.css';
import './index.css';
import Player from './components/Player';
import Gameboard from './components/Gameboard';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winningCombination';
import { useState } from 'react';
import Gameover from './components/Gameover';
const initialGameboard =[
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

function deriveActivePlayer(gameTurns){
    let currentPlayer = "X"
    if (gameTurns.length>0 && gameTurns[0].player === "X"){
      currentPlayer = "O";
    }
    return currentPlayer;
  
}
function App() {
  let [players,setPlayers] = useState({
    X : "player1",
    O : "player2"
  })
  let [gameTurns,setGameTurns] = useState([]);
  let activePlayer = deriveActivePlayer(gameTurns);
  let gameboard = [...initialGameboard.map(inner=> [...inner])];
  console.log(gameboard)
  for (const turn of gameTurns){
      let {square,player} = turn;
      let {row,col} = square;
      gameboard[row][col] = player;
  }
  let winner;
  for (const combination of WINNING_COMBINATIONS){
    let firstSquareSymbol = gameboard[combination[0].row][combination[0].column];
    let secondSquareSymbol = gameboard[combination[1].row][combination[1].column];
    let thirdSquareSymbol = gameboard[combination[2].row][combination[2].column];
    
    if(firstSquareSymbol&&firstSquareSymbol===secondSquareSymbol&&secondSquareSymbol===thirdSquareSymbol){
     winner = players[firstSquareSymbol];
    }
  }
  let gamedrawn = ((gameTurns.length)===9 && !winner);
  function handleReset(){
    setGameTurns([]);
  }
  function handlePlayerChangeName(symbol,newName){
    setPlayers(prevPlayers=>{
      return {
        ...prevPlayers,
        [symbol]:newName,
      };
  });

  }
  
  //let [activePlayer,setActivePlayer] = useState("X");
  function handleButton(rowIndex,colIndex){
    //setActivePlayer((currentActiveplayer)=>(currentActiveplayer==="X")?"O":"X");
    setGameTurns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns);
      
      let updatedTurns = [{square:{row:rowIndex,col:colIndex }, player:currentPlayer },...prevTurns,];
      return updatedTurns;
  })
  }
  return (
  <main>
    <div id="game-conatainer">
      <ol id="players" className='highlight-player'>
        <Player name="Player1" symbol="X" isActive={activePlayer==="X"} onChangeName={handlePlayerChangeName}/>
        <Player name="Player2" symbol="O" isActive={activePlayer==="O"} onChangeName={handlePlayerChangeName}/>
      </ol>
      <Gameboard board={gameboard} onSelectPlayer={handleButton}/>
      {(winner||gamedrawn)&&<Gameover winner={winner} handleReset={handleReset}/>}
    </div>
    <Log  turns={gameTurns}/>
  </main>
    
  );
}

export default App;
