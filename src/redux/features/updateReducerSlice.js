export const updateBoardReducer = (state = {}, action) => {
  if (action.type === "make-movement") {
    return {
      ...state,
      winner: action.payload.winner,
    };
  }

  return state;
}

export const updatedBoard = (state) => {
  return state.updatedBoard;
}

export const updateBoard = (updatedValues) => {
  return {
    type: "make-movement",
    payload: {
      winner: updatedValues.winner,
    },
  };
}
