import React, { useState } from "react";

import './App.css';
import Game from "./Game";

const App = () => {
  const[makeGame, setMakeGame] = useState(false);

  const makeGameHandler = () => setMakeGame(true);

  return (
    <div className="App">
        {!makeGame && <button className="newGameBtn" onClick={makeGameHandler}>New Game</button>}
        {makeGame && <Game />}
    </div>
  )
}

export default App;

