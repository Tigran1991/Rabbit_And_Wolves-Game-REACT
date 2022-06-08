import React from 'react';

import './App.css';
import CharacterCell from './CharacterCell';
import { FREE_CELL } from './RabbitWolfGameClass';

const Playfield = (props) => {

    return (
      <div className='playfield'>

        {props.matrix.map((row, X) => 
          row.map((rowItem, Y) =>
            rowItem !== 0 ?
            <CharacterCell item={rowItem} key={X + "" + Y}/> :
            <CharacterCell item={FREE_CELL} key={X + "" + Y}/>
          )    
        )}
        
      </div>
    )
}

export default Playfield;