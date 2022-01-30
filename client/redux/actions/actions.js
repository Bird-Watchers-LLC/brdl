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
  payload: e.target.key,
});

export const updateFriendMessagesActionCreator = (pl) => ({
  type: types.UPDATE_FRIEND_MESSAGES,
  payload: pl
});

export const updateCommunityMessagesActionCreator = (pl) => ({
  type: types.UPDATE_COMMUNITY_MESSAGES,
  payload: pl
});

export const updateSeenBirdsActionCreator = (pl) => ({
  type: types.UPDATE_SEEN_BIRDS,
  payload: pl
});

export const updateLocalBirdsActionCreator = (pl) => ({
  type: types.UPDATE_LOCAL_BIRDS,
  payload: pl
});

// export default login;
