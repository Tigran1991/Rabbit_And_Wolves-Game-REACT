import React from 'react';
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

    const id = props.boardData.id;
    const size = props.boardData.size;
    const matrix = props.boardData.matrix;
    const winner = props.boardData.winner;

    const boardStyle = {
        width: CELL_SIZE * size + WIDTH_INDEX,
        height: CELL_SIZE * size + HEIGHT_INDEX
    }

    return (
        <div className="boardContainer">

            <div className="board" style={boardStyle}>
                {
                    winner !== undefined ?
                    <h1 className='winner'> {winner} WIN ! </h1> :
                    <Playfield matrix={matrix} key={'playfield' + id} />
                }
            </div>

            {
                winner === undefined &&
                    <ButtonElements updateMatrix={(sideMove) => {
                        const [updatedMatrix, winnerCharacter] = moveCharacters(sideMove, matrix, size);
                        dispatch(updateBoard({
                            id: id,
                            matrix: [...updatedMatrix],
                            winner: winnerCharacter, 
                        }))
                    }} key={'buttonsDiv' + id} />
            }
        </div>           
    )
}

export default GameBoard;