import { combineReducers, createStore } from 'redux';
import { currentIdReducer, initialId } from '../features/idReducerSlice'
import { currentSizeReducer, initialSize } from '../features/sizeReducerSlice';
import { currentBoardReducer } from '../features/boardReducerSlice';
import { boardsReducer } from '../features/boardsReducerSlice';

const store = createStore(combineReducers({
  currentId: currentIdReducer,
  currentSize: currentSizeReducer,
  boards: boardsReducer
}), {
  currentId: initialId,
  currentSize: initialSize,
});

export default store;


