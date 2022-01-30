import * as types from '../constants/actionTypes';

const initialState = {
  mode: 'dev',
  signupPost: {
    valid: true,
  },
};

const responsesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return initialState;
  }
};

export default responsesReducer;
