import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSize, selectedSize } from "./redux/features/sizeReducerSlice";

import './App.css';
import { generateId } from "./RabbitWolfGameClass";

const Options = ({ createNewGame }) => {

    const CURRENT_SIZE = useSelector(selectedSize);

    const dispatch = useDispatch();

    return (
        <>
            <div className="gameOptions">
                <select onChange={(event) => {
                    dispatch(selectSize(parseInt(event.target.value)))
                }}>
                    <option value='7'>7 X 7</option>
                    <option value='8'>8 X 8</option>
                    <option value='9'>9 X 9</option>
                </select>                
                <button className="newBoardBtn" onClick={() => createNewGame(generateId(), CURRENT_SIZE)}>New Board</button>
                <button className="reloadBtn" onClick={() => window.location.reload()}>Reload</button>
            </div>
        </>        
    )
}

export default Options;