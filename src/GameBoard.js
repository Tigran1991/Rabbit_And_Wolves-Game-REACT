import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Playfield from './Playfield';
import ButtonElements from './ButtonElements';
import { moveCharacters } from './RabbitWolfGameClass';
import { updateBoard } from './redux/features/boardsReducerSlice';

const GameBoard = (props) => {

    const dispatch = useDispatch();

    const CELL_SIZE = 60;
    const WIDTH_INDEX = 44;
    const HEIGHT_INDEX = 83;

    const boardStyle = {
        width: CELL_SIZE * props.boardData.matrix.length + WIDTH_INDEX,
        height: CELL_SIZE * props.boardData.matrix.length + HEIGHT_INDEX
    }

    return (
        <div className="boardContainer">

            <div className="board" style={boardStyle}>
                {
                    props.boardData.winner !== undefined ?
                    <h1 className='winner'> {props.boardData.winner} WIN ! </h1> :
                    <Playfield matrix={props.boardData.matrix} key={'playfield' + props.boardData.id} />
                }
            </div>

            {
                props.boardData.winner === undefined &&
                    <ButtonElements updateMatrix={(sideMove) => {
                        const [updatedMatrix, winnerCharacter] = moveCharacters(sideMove, props.boardData.matrix, props.boardData.size);
                        dispatch(updateBoard({
                            id: props.boardData.id,
                            matrix: [...updatedMatrix],
                            winner: winnerCharacter, 
                        }))
                    }} key={'buttonsDiv' + props.boardData.id} />
            }
        </div>           
    )
}

export default GameBoard;