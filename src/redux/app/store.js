import { combineReducers, createStore } from 'redux';
import { gameFieldReducer, initialGameField } from '../features/gameReducerSlice';
import { currentIdReducer, initialId } from '../features/idReducerSlice'
import { currentSizeReducer, initialSize } from '../features/sizeReducerSlice';
import { boardsReducer } from '../features/boardsReducerSlice';
import { updateBoardReducer } from '../features/updateReducerSlice';

const store = createStore(combineReducers({
  gameField: gameFieldReducer,
  currentId: currentIdReducer,
  currentSize: currentSizeReducer,
  boards: boardsReducer,
  updateBoard: updateBoardReducer
}), {
  gameField: initialGameField,
  currentId: initialId,
  currentSize: initialSize,
});

export default store;


