import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

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

    const ID = props.boardData.id;
    const SIZE = props.boardData.size;
    const MATRIX = props.boardData.matrix;
    const WINNER = props.boardData.winner;

    const boardStyle = {
        width: CELL_SIZE * SIZE + WIDTH_INDEX,
        height: CELL_SIZE * SIZE + HEIGHT_INDEX
    }

    return (
        <div className="boardContainer">

            <div className="board" style={boardStyle}>
                {
                    WINNER !== undefined ?
                    <h1 className='winner'> {WINNER} WIN ! </h1> :
                    <Playfield matrix={MATRIX} key={'playfield' + ID} />
                }
            </div>

            {
                WINNER === undefined &&
                <ButtonElements updateMatrix={(sideMove) => {
                    const [updatedMatrix, winnerCharacter] = moveCharacters(sideMove, MATRIX, SIZE);
                    dispatch(updateBoard({
                        id: ID,
                        matrix: [...updatedMatrix],
                        winner: winnerCharacter, 
                    }))
                }} key={'buttonsDiv' + ID} />
            }
        </div>           
    )
}

export default GameBoard;