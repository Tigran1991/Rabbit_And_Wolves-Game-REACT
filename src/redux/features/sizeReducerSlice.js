export function currentSizeReducer(state={}, action) {
  if(action.type === 'select-size') {
    return {
      ...state,
      size: action.payload.size
    }
  }

  return state;
};

export const initialSize = {
  size: 7
};

export function selectSize(state) {
  return state.currentSize.size;
};

export function selectedSize(newSize) {
  return {
    type: 'select-size',
    payload: {
      size: newSize,
    }
  }
};