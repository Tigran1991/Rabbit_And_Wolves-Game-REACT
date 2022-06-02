import React from 'react';

import './App.css';
import Cell from './Cell';
import CharacterCell from './CharacterCell';

const Playfield = (props) => {

    return (
      <div className='playfield'>

        {props.matrix.map((row, X) => 
          row.map((rowItem, Y) =>
            rowItem !== 0 ?
            <CharacterCell item={rowItem} key={X + "" + Y}/> :
            <Cell key={X + "" + Y} />
          )    
        )}
      </div>
    )
}

export default Playfield;