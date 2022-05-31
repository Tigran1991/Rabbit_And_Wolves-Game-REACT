import React, { useState } from "react";

import './App.css';
import Options from "./Options";
// import Board from "./Board";
import Playfield from "./Playfield";
import ButtonElements from "./ButtonElements";
import { generateCurrentId } from './makeGame';
import { makeGame } from './makeGame';

const App = () => {

  const[makeGameField, setMakeGameField] = useState(false);
  const[currentId, setCurrentId] = useState([]);
  const[currentSize, setCurrentSize] = useState();
  const[currentMatrix, setCurrentMatrix] = useState();
  const[game, setGame] = useState();
  const[winner, setWinner] = useState();

  const currentGameId = generateCurrentId();

  const makeGameHandler = () => {
    setMakeGameField(true);
  }

  const cellSize = 60;

  const boardStyle = {
    width: cellSize * currentSize + 44,
    height: cellSize * currentSize + 83
}

  return (
    <div className="App">
        {!makeGameField && <button className="newGameBtn" onClick={makeGameHandler}>New Game</button>}

        <div className="container">
          {makeGameField &&
            <Options saveBoardId={(size) => {
              setCurrentId(currentId.concat(currentGameId));
              setCurrentSize(size)
              const game = makeGame()
              setCurrentMatrix(game.currentMatrix(size))
              setGame(game)
            }} />
          }
          
          <div className="boardField">
            {makeGameField && currentId.map(id => {
              return (
                <div className="boardContainer">
                  {
                    <div className="board" style={boardStyle}>
                      {
                        winner !== undefined ?
                        <h1 className='winner'> {winner} WIN ! </h1> :
                        <Playfield matrix={currentMatrix} />
                      }
                    </div>
                  }
                  
                  <ButtonElements updateMatrix={(sideMove) => {
                    const game = makeGame()
                    const [updatedMatrix, winnerCharacter] = game.moveCharacters(sideMove, currentMatrix)
                    setCurrentMatrix([...updatedMatrix])
                    setWinner(winnerCharacter);
                  }}/>
                </div>  
              )
            })}
          </div>
        </div>
    </div>
  )
}

export default App;


