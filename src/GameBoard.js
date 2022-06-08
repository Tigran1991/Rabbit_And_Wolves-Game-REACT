import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatedBoard } from './redux/features/updateReducerSlice';

import './App.css';
import Playfield from './Playfield';
import ButtonElements from './ButtonElements';
import { moveCharacters } from './RabbitWolfGameClass';
import { updateBoard } from './redux/features/updateReducerSlice';

const GameBoard = (props) => {

    const dispatch = useDispatch(updatedBoard);

    const board = useSelector(updateBoard);

    const CELL_SIZE = 60;
    const WIDTH_INDEX = 44;
    const HEIGHT_INDEX = 83;

    const boardStyle = {
        width: CELL_SIZE * props.matrix.length + WIDTH_INDEX,
        height: CELL_SIZE * props.matrix.length + HEIGHT_INDEX
    }

    return (
        <div className="boardContainer">

            <div className="board" style={boardStyle}>
                {
                    board.winner !== undefined ?
                    <h1 className='winner'> {board.winner} WIN ! </h1> :
                    <Playfield matrix={props.matrix} key={'playfield' + props.keyName} />
                }
            </div>

            <ButtonElements updateMatrix={(sideMove) => {
                const [updatedMatrix, winnerCharacter] = moveCharacters(sideMove, props.matrix, props.size);
                dispatch(updatedBoard({
                    matrix: updatedMatrix,
                    winner: winnerCharacter
                }))
            }} key={'buttonsDiv' + props.keyName} />
        </div>           
    )
}

export default GameBoard;