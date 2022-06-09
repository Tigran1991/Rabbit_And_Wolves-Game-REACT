export function updateBoardReducer(state = {}, action) {
  if (action.type === "make-movement") {
    return {
      ...state,
      winner: action.payload.winner,
    };
  }

  return state;
}

export function updatedBoard(state) {
  return state.updatedBoard;
}

export function updateBoard(updatedValues) {
  return {
    type: "make-movement",
    payload: {
      winner: updatedValues.winner,
    },
  };
}
