import * as types from '../constants/actionTypes';

const initialState = {
  username: '',
  password: '',
  fullName: '',
  message: '',
  response: { valid: false },
  validUser: undefined,
};

const textFieldReducer = (state = initialState, action) => {
  const newState = { ...state };

  console.log('type', action.type);

  const updateTextPerLetter = typeOfField => {
    let curStateVal = newState[typeOfField];
    if (action.payload.inputType === 'deleteContentBackward')
      curStateVal = newState[typeOfField].slice(0, -1);
    else curStateVal = newState[typeOfField] + action.payload.data;

    console.log('new prop', { typeOfField, curStateVal });
    return curStateVal;
  };

  switch (action.type) {
    case types.USERNAME_CHANGE:
      const newUserName = updateTextPerLetter('username');
      return {
        ...newState,
        username: newUserName,
      };

    case types.PASSWORD_CHANGE:
      const newPassword = updateTextPerLetter('password');
      return {
        ...newState,
        password: newPassword,
      };

    case types.FULL_NAME_CHANGE:
      const newFullName = updateTextPerLetter('fullName');
      return {
        ...newState,
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
      //   ...newState
      // });

      // return queryRes.valid
      //   ? {
      //       ...newState,
      //       page: 'login',
      //     }
      //   : newState;

      return {
        ...newState,
        validUser: false,
      };

    default:
      return newState;
  }
};

export default textFieldReducer;
