import * as types from '../constants/actionTypes';

const initialState = {
  username: '',
  password: '',
  fullName: '',
  message: '',
  response: { valid: false },
  validUser: undefined,
  validLogin: undefined,
};

const textFieldReducer = (state = initialState, action) => {
  // const state = { ...state };

  console.log('type', action.type);

  const updateTextPerLetter = typeOfField => {
    let curStateVal = state[typeOfField];
    if (action.payload.inputType === 'deleteContentBackward')
      curStateVal = state[typeOfField].slice(0, -1);
    else curStateVal = state[typeOfField] + action.payload.data;

    console.log('new prop', { typeOfField, curStateVal });
    return curStateVal;
  };

  switch (action.type) {
    case types.USERNAME_CHANGE:
      const newUserName = updateTextPerLetter('username');
      return {
        ...state,
        username: newUserName,
      };

    case types.PASSWORD_CHANGE:
      const newPassword = updateTextPerLetter('password');
      return {
        ...state,
        password: newPassword,
      };

    case types.FULL_NAME_CHANGE:
      const newFullName = updateTextPerLetter('fullName');
      return {
        ...state,
        fullName: newFullName,
      };

    case types.CREATE_ACCOUNT_SUBMIT:
      // action.payload.e.preventDefault();
      // console.log(action.payload);

      // let queryRes;

      // if (action.payload.mode === 'dev') {
      //   queryRes = action.payload.serverRes;
      // } else {
      //   // queryRes = actual server query
      // }

      // console.log(queryRes);

      // console.log({
      //   ...state
      // });

      // return queryRes.valid
      //   ? {
      //       ...state,
      //       page: 'login',
      //     }
      //   : state;

      return {
        ...state,
        validUser: false,
      };

    case types.LOGIN_SUBMIT:
      return {
        ...state,
        validLogin: false,
      };

    default:
      return state;
  }
};

export default textFieldReducer;
