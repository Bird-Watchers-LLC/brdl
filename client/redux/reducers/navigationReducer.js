import * as types from '../constants/actionTypes';

const initialState = {
  page: 'signUp',
};

const navigationReducer = (state = initialState, action) => {
  const stateCopy = { ...state };

  switch (action.type) {
    case types.CHANGE_PAGE:
      return {
        ...stateCopy,
        page: action.payload,
      }
      
    case types.SIGN_UP:
      return {
        ...stateCopy,
        page: 'signUp',
      };

    case types.LOGIN:
      return {
        ...stateCopy,
        page: 'login',
      };

    case types.COMMUNITY:
      return {
        ...stateCopy,
        page: 'community',
      };

    case types.PROFILE:
      return {
        ...stateCopy,
        page: 'profile',
      };

    default:
      return stateCopy;
  }
};

export default navigationReducer;
