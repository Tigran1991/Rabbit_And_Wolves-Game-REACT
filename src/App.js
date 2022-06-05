import React, { useState } from "react";

import './App.css';
import Options from "./Options";
import GameBoard from "./GameBoard";
import { createCurrentMatrix } from './RabbitWolfGameClass';

const App = () => {

  const[makeGameField, setMakeGameField] = useState(false);
  const[currentId, setCurrentId] = useState([]);
  const[currentSize, setCurrentSize] = useState(7);
  const[currentMatrix, setCurrentMatrix] = useState();

  return (
    <div className="App">
        {!makeGameField && <button className="newGameBtn" onClick={() => setMakeGameField(true)}>New Game</button>}

        <div className="container">
          {makeGameField &&
            <Options createNewGame={(size, id) => {
              setCurrentId(currentId.concat(id));
              setCurrentSize(size);
              setCurrentMatrix(createCurrentMatrix(size));
            }} />
          }

          <div className="boardField">
            {currentId.map(id => {
              return <GameBoard keyName={id} size={currentSize} matrix={currentMatrix} key={id}/>
            })} 
          </div>
        </div>
    </div>
  )
}

export default App;


