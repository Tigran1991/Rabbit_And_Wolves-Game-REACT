export function currentBoardReducer(state, action) { //reducer
    if (action.type === "add-board") {
        return {
            ...state,
            id: action.payload.id,
            size: action.payload.size,
            matrix: action.payload.matrix,
        }
    }

  return state;
}

export function selectBoard(state) { // useSelector
  return state.boards;
}

export function selectedBoard(newBoard) { // dispatch
    return {
    type: "add-board",
    payload: {
        id: newBoard.id,
        size: newBoard.size,
        matrix: newBoard.matrix,
        winner: newBoard.winner
    },
  };
}
