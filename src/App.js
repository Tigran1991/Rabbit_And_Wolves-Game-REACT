import React, { useState } from "react";

import './App.css';
import Options from "./Options";
import GameBoard from "./GameBoard";
import { gameFieldStatus, makeGameField } from "./redux/features/gameReducerSlice";
import { createCurrentMatrix } from './RabbitWolfGameClass';
import { useDispatch, useSelector } from "react-redux";
import { selectedBoard } from './redux/features/boardReducerSlice';
import { selectBoards } from './redux/features/boardsReducerSlice';

const App = () => {

  const makeGame = useSelector(makeGameField);

  const boards = useSelector(selectBoards);

  const dispatch = useDispatch();

  return (
    <div className="App">
        {!makeGame.makeGameField && <button className="newGameBtn" onClick={() => dispatch(gameFieldStatus(true))}>New Game</button>}

        <div className="container">
          {makeGame.makeGameField &&
            <Options createNewGame={(currentId, currentSize) => {
              dispatch(selectedBoard({
                id: currentId,
                size: currentSize,
                matrix: createCurrentMatrix(currentSize),
              }));
            }} />
          }

          <div className="boardField">
            {boards.map(id => {
              return <GameBoard keyName={id.id} size={id.size} matrix={id.matrix} winner={id.winner} key={id.id}/>
            })} 
          </div>
        </div>
    </div>
  )
}

export default App;


