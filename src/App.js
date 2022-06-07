import React, { useState } from "react";

import './App.css';
import Options from "./Options";
import GameBoard from "./GameBoard";
import { createCurrentMatrix } from './RabbitWolfGameClass';
import { useDispatch, useSelector } from "react-redux";
import { selectedBoard } from './redux/features/boardReducerSlice';
import { selectBoards } from './redux/features/boardsReducerSlice';

const App = () => {

  const[makeGameField, setMakeGameField] = useState(false);

  const boards = useSelector(selectBoards);

  const dispatch = useDispatch();

  return (
    <div className="App">
        {!makeGameField && <button className="newGameBtn" onClick={() => setMakeGameField(true)}>New Game</button>}

        <div className="container">
          {makeGameField &&
            <Options createNewGame={(currentId, currentSize) => {
              dispatch(selectedBoard({
                id: currentId,
                size: currentSize,
                matrix: createCurrentMatrix(currentSize)
              }));
            }} />
          }

          <div className="boardField">
            {boards.map(id => {
              return <GameBoard keyName={id} matrix={id.matrix} key={id.id}/>
            })} 
          </div>
        </div>
    </div>
  )
}

export default App;


