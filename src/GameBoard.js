import React from 'react';

import './App.css';
import Playfield from './Playfield';
import ButtonElements from './ButtonElements';

const GameBoard = (props) => {

    const CELL_SIZE = 60;
    const WIDTH_INDEX = 44;
    const HEIGHT_INDEX = 83;

    const boardStyle = {
        width: CELL_SIZE * props.matrix.length + WIDTH_INDEX,
        height: CELL_SIZE * props.matrix.length + HEIGHT_INDEX
    }

    return (
        <div className="boardContainer">

            <div className="board" style={boardStyle}>
                {
                    // winner !== undefined ?
                    // <h1 className='winner'> {winner} WIN ! </h1> :
                    <Playfield matrix={props.matrix} key={'playfield' + props.keyName} />
                }
            </div>

            <ButtonElements key={'buttonsDiv' + props.keyName} />
        </div>           
    )
}

export default GameBoard;