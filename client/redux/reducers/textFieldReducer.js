import * as types from '../constants/actionTypes';

const initialState = {
  username: '',
  password: '',
  fullName: '',
  message: '',
};

const textFieldReducer = (state = initialState, action) => {
  const newState = { ...state };

  const updateTextPerLetter = typeOfField => {
    console.log('inpu', typeOfField);
    let curStateVal = newState[typeOfField];
    console.log('curStateVal', curStateVal);
    if (action.payload.inputType === 'deleteContentBackward')
      curStateVal = newState[typeOfField].slice(0, -1);
    else curStateVal = newState[typeOfField] + action.payload.data;

    console.log('new State Val', curStateVal);

    return {
      ...newState,
      typeOfField: curStateVal,
    };
  };

  switch (action.type) {
    case types.USERNAME_CHANGE:
      // if (action.payload.inputType === 'deleteContentBackward')
      //   username = newState.username.slice(0, -1);
      // else username = newState.username + action.payload.data;

      // return {
      //   ...newState,
      //   username,
      // };
      updateTextPerLetter('username');

    case types.PASSWORD_CHANGE:
      // if (action.payload.inputType === 'deleteContentBackward')
      //   username = newState.username.slice(0, -1);
      // else username = newState.username + action.payload.data;

      // return {
      //   ...newState,
      //   username,
      // };
      updateTextPerLetter('password');

    case types.FULL_NAME_CHANGE:
      updateTextPerLetter('fullName');

    default:
      return newState;
  }
};

export default textFieldReducer;
