import * as types from '../constants/actionTypes';

const initialState = {
  mode: 'production',
  signUpPost: {
    valid: true,
  },
  loginGet: {
    valid: true,
  },
};

const responsesReducer = (state = initialState, action) => {
  const statecopy = { ...state };

  switch (action.type) {
    default:
      return statecopy;
  }
};

export default responsesReducer;
