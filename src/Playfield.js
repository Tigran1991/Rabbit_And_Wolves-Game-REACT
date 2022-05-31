import React from 'react';

import './App.css';
import Cell from './Cell';

const Playfield = ({ matrix }) => {

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

    if(matrix === undefined){
      return null
    }

    return (
      <div className='playfield'>

        {matrix.map(row => 
            row.map(rowItem =>
                rowItem !== 0 ? <div className={CHARACTERS[rowItem].id}></div> : <Cell />
            )    
        )}
      </div>
    )
}

export default Playfield;