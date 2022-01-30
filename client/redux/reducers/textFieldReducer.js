import * as types from '../constants/actionTypes';

const initialState = {
  username: '',
  password: '',
  message: '',
};

const textFieldReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case types.USERNAME_CHANGE:
      console.log(newState.username);
      console.log(action.payload);
      console.log(action.payload.data);

      if (action.payload.inputType === 'deleteContentBackward')
        username = newState.username.slice(0, -1);
      else username = newState.username + action.payload.data;

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
