import * as types from '../constants/actionTypes.js';

export const changeToLoginPageActionCreator = () => ({
  type: types.LOGIN,
});

export const changeToSignUpPageActionCreator = () => ({
  type: types.SIGN_UP,
});

export const changeToCommunityPageActionCreator = () => ({
  type: types.COMMUNITY,
});

export const changeToProfilePageActionCreator = () => ({
  type: types.PROFILE,
});

export const usernameChangeActionCreater = e => ({
  type: types.USERNAME_CHANGE,
  payload: e,
});

// export default login;
