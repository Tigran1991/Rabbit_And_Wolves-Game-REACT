import { generateId } from "../../RabbitWolfGameClass";

export function currentIdReducer(state={}, action) { // reducer
  if(action.type === 'select-id') {
      return {
        ...state,
        id: action.payload.id
      };
    }
  
    return state;
  };
  
  export const initialId = { // initialState
    id: generateId()
  };
  
  export function selectId(state) { // useSelector
    return state.currentId.id;
  };
  
  export function selectedId(newId) { //dispatch 
    return {
      type: 'select-id',
      payload: {
        id: newId
      }
    }
  };