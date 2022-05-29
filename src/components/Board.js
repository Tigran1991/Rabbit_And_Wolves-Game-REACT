import React, { useState } from 'react';

import './Board.css';
import Playfield from './Playfield';
import ButtonElements from './ButtonElements';
import { generateCurrentId } from '../GameMaker';

const Board = (props) => {

    console.log(props);

    const boardStyle = {
        width: props.boardSize * 60 + 44,
        height: props.boardSize * 60 + 83
    }

    return (
        <div className='board' style={boardStyle}>
            <Playfield size={props.boardSize} currentMatrix={props.matrix} key={props.playfieldKey} />
            <ButtonElements saveBoardId={saveBoardId} currentMatrix={props.matrix}/>
        </div>
    )
}

export default Board;