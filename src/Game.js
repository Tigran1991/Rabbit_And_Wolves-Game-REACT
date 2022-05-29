import React, { useState } from 'react';

import './App.css';
import Options from './Options';
import Board from './Board';
import ButtonElements from './ButtonElements';
import { generateCurrentId } from './makeGame';
import { makeGame } from './makeGame';


const Game = () => {

    const [currentId, setCurrentId] = useState([]);
    const [currentPlayfield, setCurrentPlayfield] = useState();
    const [currentMatrix, setCurrentMatrix] = useState();
    
    const saveBoardId = (boardSize) => {
        setCurrentId(currentId.concat(generateCurrentId()));
        const MATRIX = makeGame(boardSize);
    }

    const updateMatrix = () => {
        const UPDATED_MATRIX = makeGame();
    }

    return (
        <div className="container">
            <Options saveBoardId={saveBoardId} />
            <div className='boardField'>
                {
                    currentId.map(id => {
                        return (
                            <div className='boardContainer'>
                                <Board />
                                <ButtonElements />
                            </div>        
                        )
                    })
                }
            </div>           
        </div>       
    )
}

export default Game;