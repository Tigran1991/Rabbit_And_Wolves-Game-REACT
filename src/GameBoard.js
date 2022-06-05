import React, { useState } from 'react';

import './App.css';
import Playfield from './Playfield';
import ButtonElements from './ButtonElements';
import { moveCharacters } from './RabbitWolfGameClass';

const GameBoard = (props) => {

    const[matrix, setMatrix] = useState(props.matrix);
    const[size, setSize] = useState(props.size); 
    const[winner, setWinner] = useState();

    const CELL_SIZE = 60;
    const WIDTH_INDEX = 44;
    const HEIGHT_INDEX = 83;

    const boardStyle = {
        width: CELL_SIZE * size + WIDTH_INDEX,
        height: CELL_SIZE * size + HEIGHT_INDEX
    }

    return (
        <div className="boardContainer">

            <div className="board" style={boardStyle}>
                {
                    winner !== undefined ?
                    <h1 className='winner'> {winner} WIN ! </h1> :
                    <Playfield matrix={matrix} key={'playfield' + props.keyName} />
                }
            </div>


            <ButtonElements updateMatrix={(sideMove) => {
                const [updatedMatrix, winnerCharacter] = moveCharacters(sideMove, matrix, size);
                setMatrix([...updatedMatrix]);
                setWinner(winnerCharacter);
            }} key={'buttonsDiv' + props.keyName} />
        </div>           
    )
}

export default GameBoard;