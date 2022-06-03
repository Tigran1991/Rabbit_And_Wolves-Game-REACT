import React from "react";

import './App.css';
import { CHARACTERS } from "./RabbitWolfGameClass";

const CharacterCell = (props) => {

    return (
        <div className={CHARACTERS[props.item].id}></div>
    )
}

export default CharacterCell;