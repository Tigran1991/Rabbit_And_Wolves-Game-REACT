export function updateBoardReducer(state={}, action) { //reducer
  if (action.type === "make-movement") {
    return {
      ...state,
      matrix: action.payload.matrix,
      winner: action.payload.winner,
    };
  }

  return state;
}

export function updateBoard(state) {
  return state.updateBoard;
}

export function updatedBoard(updatedMatrix) {
  return {
    type: "make-movement",
    payload: {
      matrix: updatedMatrix.matrix,
      winner: updatedMatrix.winner,
    },
  };
}


