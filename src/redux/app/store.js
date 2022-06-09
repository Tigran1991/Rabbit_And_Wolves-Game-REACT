import { combineReducers, createStore } from 'redux';
import { gameFieldReducer, initialGameField } from '../features/gameReducerSlice';
import { sizeReducer, initialSize } from '../features/sizeReducerSlice';
import { boardsReducer } from '../features/boardsReducerSlice';
import { boardReducer } from '../features/boardReducerSlice';

const store = createStore(combineReducers({
  gameField: gameFieldReducer,
  currentSize: sizeReducer,
  board: boardReducer,
  boards: boardsReducer,
}), {
  gameField: initialGameField,
  currentSize: initialSize,
});

export default store;


