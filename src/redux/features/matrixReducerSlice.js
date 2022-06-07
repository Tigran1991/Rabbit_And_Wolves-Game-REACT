import { createCurrentMatrix } from "../../RabbitWolfGameClass";

export function currentMatrixReducer(state={}, action) {
  if (action.type === "select-matrix") {
    return {
      ...state,
      matrix: action.payload.matrix,
    };
  }

  return state;
}

export const initialMatrix = {
  matrix: createCurrentMatrix(7),
};

export function selectMatrix(state) {
  return state.currentMatrix.matrix;
}

export function selectedMatrix(newMatrix) {
  return {
    type: "select-matrix",
    payload: {
      matrix: newMatrix,
    },
  };
}
