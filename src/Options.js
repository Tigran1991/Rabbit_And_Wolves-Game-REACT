import React, { useState } from "react";

import './App.css';
import { generateId } from "./RabbitWolfGameClass";

const Options = ({createNewGame}) => {

    const [size, setSize] = useState(7)

    return (
        <>
            <div className="gameOptions">
                <select onChange={(event) => setSize(parseInt(event.target.value))}>
                    <option value='7'>7 X 7</option>
                    <option value='8'>8 X 8</option>
                    <option value='9'>9 X 9</option>
                </select>                
                <button className="newBoardBtn" onClick={(event) => createNewGame(size, generateId())}>New Board</button>
                <button className="reloadBtn" onClick={() => window.location.reload()}>Reload</button>
            </div>
        </>        
    )
}

export default Options;