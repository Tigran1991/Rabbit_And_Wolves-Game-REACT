import React, { useState } from 'react';
import { makeMatrix } from '../GameMaker';
import { makeGame } from '../GameMaker';

import './Board.css';

const ButtonElements = ({saveBoardId}) => {

    return (
        <div className='buttons-div'>
            <button className='move-right' onClick={() => saveBoardId()}></button>
            <button className='move-bottom'></button>
            <button className='move-left'></button>
            <button className='move-top'></button>
        </div>
    )
}

export default ButtonElements;