import React from 'react';

import './App.css';

const Board = (props) => {
    const cellSize = 60;

    const boardStyle = {
        width: cellSize * props.boardSize + 44,
        height: cellSize * props.boardSize + 83
    }

    return (
        <div className='board' style={boardStyle}>
            {/* <Playfield size={props.boardSize} currentMatrix={props.matrix} key={props.playfieldKey} /> */}
        </div>
    )
}

export default Board;