import React from "react";
import { useDispatch, useSelector } from "react-redux";

import './App.css';
import Options from "./Options";
import GameBoard from "./GameBoard";
import { createCurrentMatrix } from './RabbitWolfGameClass';
import { gameFieldStatus, makeGameField } from "./redux/features/gameReducerSlice";
import { selectedBoard } from './redux/features/boardReducerSlice';
import { selectedBoards } from './redux/features/boardsReducerSlice';

const App = () => {

  const dispatch = useDispatch();

  const makeGame = useSelector(makeGameField);
  const boards = useSelector(selectedBoards);

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
            {boards.map(board => {
              return <GameBoard boardData={board} key={board.id} />
            })} 
          </div>
        </div>
    </div>
  )
}

export default App;

