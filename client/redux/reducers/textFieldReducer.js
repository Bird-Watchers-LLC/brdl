import * as types from '../constants/actionTypes';

const initialState = {
  username: '',
  password: '',
  message: '',
  lat: '',
  long: '',
};

const textFieldReducer = (state = initialState, action) => {
  // const newState = { ...initialState };

  switch (action.type) {
    case types.UPDATE_LOCATION: 
      const { lat, long } = action.payload;

      return {
        ...state,
        lat,
        long
      }
    
    case types.USERNAME_CHANGE:
      username = state.username + action.payload;

      console.log('changing username', { username });

      return {
        ...state,
        username,
      };

    default:
      return state;
  }
};

export default textFieldReducer;
