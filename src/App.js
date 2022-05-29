import React, { useState } from "react";

import './App.css';
import Game from "./Game";

const App = () => {
  const[makeGameField, setMakeGameField] = useState(false);

  const makeGameHandler = () => setMakeGameField(true);

  return (
    <div className="App">
        {!makeGameField && <button className="newGameBtn" onClick={makeGameHandler}>New Game</button>}
        {makeGameField && <Game />}
    </div>
  )
}

export default App;

