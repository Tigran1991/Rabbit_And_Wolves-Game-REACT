import React, { useState } from "react";

import './App.css';
import Options from "./Options";
import GameBoard from "./GameBoard";
import { createCurrentMatrix } from './RabbitWolfGameClass';

const App = () => {

  const[makeGameField, setMakeGameField] = useState(false);

  const makeGameHandler = () => {
    setMakeGameField(true);
  }

  const[currentSize, setCurrentSize] = useState(7);
  const[currentId, setCurrentId] = useState([]);
  const[matrix, setMatrix] = useState();

  return (
    <div className="App">
        {!makeGameField && <button className="newGameBtn" onClick={makeGameHandler}>New Game</button>}

        <div className="container">
          {makeGameField &&
            <Options createNewGame={(size, id) => {
              setCurrentId(currentId.concat(id));
              setCurrentSize(size);
              setMatrix(createCurrentMatrix(size));
            }} />
          }

          <div className="boardField">
            {currentId.map(id => {
              return <GameBoard key={id} matrix={matrix} size={currentSize} keyName={id} />
            })} 
          </div>
        </div>
    </div>
  )
}

export default App;


