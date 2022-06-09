import { boardReducer } from "./boardReducerSlice";

export function boardsReducer(state = [], action) {
  if (action.type === "add-board") {
    return [...state, boardReducer(undefined, action)];
  }
  if (action.type === "make-movement") {
    state.filter((item) => {
      if (item.id === action.payload.id) {
        item.matrix = action.payload.matrix;
        item.winner = action.payload.winner;
      }
    });
    return [...state];
  }

  return state;
}

export function selectedBoards(state) {
  return state.boards;
}

export function updateBoard(updatedValues) {
  return {
    type: "make-movement",
    payload: {
      id: updatedValues.id,
      matrix: updatedValues.matrix,
      winner: updatedValues.winner,
    },
  };
}
