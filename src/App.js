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

  const MAKE_GAME = useSelector(makeGameField);
  const BOARDS = useSelector(selectedBoards);

  return (
    <div className="App">
        {!MAKE_GAME.makeGameField && <button className="newGameBtn" onClick={() => dispatch(gameFieldStatus(true))}>New Game</button>}

        <div className="container">

          {MAKE_GAME.makeGameField &&
            <Options createNewGame={(currentId, currentSize) => {
              dispatch(selectedBoard({
                id: currentId,
                size: currentSize,
                matrix: createCurrentMatrix(currentSize),
              }));
            }} />
          }

          <div className="boardField">
            {BOARDS.map(board => {
              return <GameBoard boardData={board} key={board.id} />
            })} 
          </div>
        </div>
    </div>
  )
}

export default App;