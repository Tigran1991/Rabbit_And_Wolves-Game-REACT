import React, { useState } from 'react';

import './Board.css';
import Cell from './Cell';

const Playfield = (props) => {

    const FREE_CELL = 0;
    const RABBIT = 1;
    const WOLF = 2;
    const HOUSE = 3;
    const FENCE = 4;

    const CHARACTERS = {
        [RABBIT]: {
          id: 'rabbit'
        },
        [WOLF]: {
          id: 'wolf'
        },
        [HOUSE]: {
          id: 'house'
        },
        [FENCE]: {
          id: 'fence'
        },
      };

    const playfieldStyle = {
        width: props.size * 60,
        height: props.size * 60
    }

    let a = 0;

    return (
        <div className='playfield' style={playfieldStyle}>
            {props.currentMatrix.map(row => 
                row.map(rowItem =>
                    rowItem !== 0 ? 
                    <div className={CHARACTERS[rowItem].id}></div> : 
                    <Cell key={'X' + a++}/>
                )    
            )}
        </div>
    )
}

export default Playfield;