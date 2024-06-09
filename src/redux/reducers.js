// reducers.js
import { SET_CONTINENT } from './actions';

const initialState = {
  selectedContinent: '',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTINENT:
      return {
        ...state,
        selectedContinent: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
