import React, { useState } from "react";

import './App.css';
import Options from "./Options";
import GameBoard from "./GameBoard";
import { generateCurrentId } from './makeGame';
import { makeGame } from './makeGame';

const App = () => {

  const[makeGameField, setMakeGameField] = useState(false);

  const currentGameId = generateCurrentId();

  const makeGameHandler = () => {
    setMakeGameField(true);
  }

  const[currentSize, setCurrentSize] = useState();
  const[currentId, setCurrentId] = useState([]);
  const[matrix, setMatrix] = useState();

  return (
    <div className="App">
        {!makeGameField && <button className="newGameBtn" onClick={makeGameHandler}>New Game</button>}

        <div className="container">
        {makeGameField &&
          <Options saveBoardId={(size, id) => {
            setCurrentId(currentId.concat(id))
            setCurrentSize(size)
            const game = makeGame()
            setMatrix(game.currentMatrix(size))
          }} />
        }
        <div className="boardField">
          {currentId.map(id => {
            return <GameBoard key={id} matrix={matrix} size={currentSize} />
          })} 
        </div>
        
        </div>
    </div>
  )
}

export default App;


