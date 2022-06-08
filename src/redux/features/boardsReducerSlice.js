import { currentBoardReducer } from './boardReducerSlice';

export function boardsReducer(state=[], action) { //reducer
    if (action.type === "add-board") {
        return [
            ...state,
            currentBoardReducer(undefined, action)
        ];
    }
  
    return state;
}
  
export function selectBoards(state) { // useSelector
  return state.boards;
}
  