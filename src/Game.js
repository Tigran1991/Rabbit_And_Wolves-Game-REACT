import React, { useState } from 'react';

import './App.css';
import { generateCurrentId, makeGame } from './GameMaker';
import Options from './Options';
import Board from './components/Board';
import { makeMatrix } from './GameMaker';

const Game = () => {

    const [currentId, setCurrentId] = useState([]);
    const [currentSize, setCurrentSize] = useState([]);
    const [currentMatrix, setCurrentMatrix] = useState([]);
    
    const saveBoardId = (boardSize) => {
        const MATRIX = makeMatrix(boardSize);
        setCurrentId(currentId.concat(generateCurrentId()));
        setCurrentSize(currentSize.concat(boardSize));
        setCurrentMatrix(currentMatrix.concat([MATRIX]));
    }

    return (
        <div className="container">
            <Options saveBoardId={saveBoardId} />
            <div className='boardField'>
            { 
                currentId.map(id => {
                    return <Board key={id}
                            boardSize={currentSize[currentId.indexOf(id)]}
                            matrix={currentMatrix[currentId.indexOf(id)]}
                            playfieldKey={'a' + id} />
                })
            }
            </div>           
        </div>       
    )
}

export default Game;