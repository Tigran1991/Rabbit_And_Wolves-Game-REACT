import React, { useState } from 'react';

import './App.css';
import Playfield from './Playfield';
import ButtonElements from './ButtonElements';
import { makeGame } from './makeGame';

const GameBoard = (props) => {

    const[matrix, setMatrix] = useState(props.matrix);
    const[size, setSize] = useState(props.size);
    const[winner, setWinner] = useState();

    const cellSize = 60;

    const boardStyle = {
        width: cellSize * size + 44,
        height: cellSize * size + 83
    } 

    return (
        <div className="boardContainer">
            {
                <div className="board" style={boardStyle}>
                    {
                        winner !== undefined ?
                        <h1 className='winner'> {winner} WIN ! </h1> :
                        <Playfield matrix={matrix} />
                    }
                </div>
            }

            <ButtonElements updateMatrix={(sideMove) => {
                const game = makeGame()
                const [updatedMatrix, winnerCharacter] = game.moveCharacters(sideMove, matrix)
                setMatrix([...updatedMatrix])
                setWinner(winnerCharacter);
            }}/>
        </div>           
    )
}

export default GameBoard;