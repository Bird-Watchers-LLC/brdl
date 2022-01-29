import * as types from '../constants/actionTypes';

const initialState = {
  username: '',
  password: '',
  message: '',
};

const textFieldReducer = (state = initialState, action) => {
  const newState = { ...initialState };

  switch (action.type) {
    case types.USERNAME_CHANGE:
      username = newState.username + action.payload;

      console.log('changing username', { username });

      return {
        ...newState,
        username,
      };

    default:
      return newState;
  }
};

export default textFieldReducer;
