import * as actions from '../../client/redux/actions/actions.js';
import * as types from '../../client/redux/constants/actionTypes';

describe('Actions and action types testing suite.', () => {
  const pL = 'test123';
  const payL = { e: 'test', mode: '123', serverRes: '456' }

  test('Should generate change page action.', () => {
    const result = actions.changePageActionCreator(pL);
    expect(result.type).toBe(types.CHANGE_PAGE);
    expect(result.payload).toBe(pL);
  })

  test('Should generate change to login page action.', () => {
    const result = actions.changeToLoginPageActionCreator(pL);
    expect(result.type).toBe(types.LOGIN);
    expect(result.payload).toBe(undefined);
  })

  test('Should generate change to sign up action.', () => {
    const result = actions.changeToSignUpPageActionCreator(pL);
    expect(result.type).toBe(types.SIGN_UP);
    expect(result.payload).toBe(undefined);
  })

  test('Should generate change to community action.', () => {
    const result = actions.changeToCommunityPageActionCreator(pL);
    expect(result.type).toBe(types.COMMUNITY);
    expect(result.payload).toBe(undefined);
  })

  test('Should generate change to profile action.', () => {
    const result = actions.changeToProfilePageActionCreator(pL);
    expect(result.type).toBe(types.PROFILE);
    expect(result.payload).toBe(undefined);
  })

  test('Should generate username change action.', () => {
    const result = actions.usernameChangeActionCreator(pL);
    expect(result.type).toBe(types.USERNAME_CHANGE);
    expect(result.payload).toBe(pL);
  })

  test('Should generate password change action.', () => {
    const result = actions.passwordChangeActionCreator(pL);
    expect(result.type).toBe(types.PASSWORD_CHANGE);
    expect(result.payload).toBe(pL);
  })

  test('Should generate full name change action.', () => {
    const result = actions.fullNameChangeActionCreator(pL);
    expect(result.type).toBe(types.FULL_NAME_CHANGE);
    expect(result.payload).toBe(pL);
  })

  test('Should generate reset fields action.', () => {
    const result = actions.resetFieldsActionCreator(pL);
    expect(result.type).toBe(types.RESET_FIELDS);
    expect(result.payload).toBe(undefined);
  })

  test('Should generate create account submit action.', () => {
    const result = actions.createAccountSubmitActionCreator(payL.e, payL.mode, payL.serverRes);
    expect(result.type).toBe(types.CREATE_ACCOUNT_SUBMIT);
    expect(result.payload).toEqual(payL);
  })

  test('Should generate login submit action.', () => {
    const result = actions.loginSubmitActionCreator(payL.e, payL.mode, payL.serverRes);
    expect(result.type).toBe(types.LOGIN_SUBMIT);
    expect(result.payload).toEqual(payL);
  })

  test('Should generate update seen birds action.', () => {
    const result = actions.updateSeenBirdsActionCreator(pL);
    expect(result.type).toBe(types.UPDATE_SEEN_BIRDS);
    expect(result.payload).toEqual(pL);
  })

  test('Should generate update local birds action.', () => {
    const result = actions.updateLocalBirdsActionCreator(pL);
    expect(result.type).toBe(types.UPDATE_LOCAL_BIRDS);
    expect(result.payload).toEqual(pL);
  })

  test('Should generate update friend messages action.', () => {
    const result = actions.updateFriendMessagesActionCreator(pL);
    expect(result.type).toBe(types.UPDATE_FRIEND_MESSAGES);
    expect(result.payload).toEqual(pL);
  })

  test('Should generate update community messages action.', () => {
    const result = actions.updateCommunityMessagesActionCreator(pL);
    expect(result.type).toBe(types.UPDATE_COMMUNITY_MESSAGES);
    expect(result.payload).toEqual(pL);
  })

  test('Should generate update location messages action.', () => {
    const result = actions.updateLocationActionCreator(pL);
    expect(result.type).toBe(types.UPDATE_LOCATION);
    expect(result.payload).toEqual(pL);
  })
})