import React from 'react';

import './App.css';

const ButtonElements = ({saveBoardId}) => {

    return (
        <div className='buttons-div'>
            <button className='move-right' ></button>
            <button className='move-bottom'></button>
            <button className='move-left'></button>
            <button className='move-top'></button>
        </div>
    )
}

export default ButtonElements;