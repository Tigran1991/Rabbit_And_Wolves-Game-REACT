export function currentBoardReducer(state, action) { //reducer
  if (action.type === "add-board") {
    return action.payload.board
  }

  return state;
}

export function selectBoard(state) { // useSelector
  return state;
}

export function selectedBoard(newBoard) { // dispatch
    return {
    type: "add-board",
    payload: {
        board: newBoard
    },
  };
}
