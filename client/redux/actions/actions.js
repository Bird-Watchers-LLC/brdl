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

export const usernameChangeActionCreator = e => ({
  type: types.USERNAME_CHANGE,
  payload: e,
});

export const passwordChangeActionCreator = e => ({
  type: types.PASSWORD_CHANGE,
  payload: e,
});

export const fullNameChangeActionCreator = e => ({
  type: types.FULL_NAME_CHANGE,
  payload: e,
});

export const createAccountSubmitActionCreator = (e, mode, serverRes) => ({
  type: types.CREATE_ACCOUNT_SUBMIT,
  payload: { e, mode, serverRes },
});

// export default login;
