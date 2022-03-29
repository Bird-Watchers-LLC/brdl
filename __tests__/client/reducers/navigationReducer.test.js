import navigationReducer from '../../../client/redux/reducers/navigationReducer';
import * as types from '../../../client/redux/constants/actionTypes';

describe('navigationReducer testing suite.', () => {
  let testState;
  beforeEach(() => testState = {
    page: 'signUp'
  })

  test('Should set initial state if no arguments are given.', () => {
    const result = navigationReducer();
    expect(result).toEqual(testState);
  })

  test('Should set page if action type is types.CHANGE_PAGE.', () => {
    const action = { type: types.CHANGE_PAGE, payload: 'login' };
    const result = navigationReducer(testState, action);
    testState.page = action.payload;
    expect(result).toEqual(testState);
  })

  test('Should set page to signUp if action.type = types.SIGN_UP.', () => {
    const action = { type: types.SIGN_UP };
    const result = navigationReducer(testState, action);
    testState.page = 'signUp';
    expect(result).toEqual(testState);
  })

  test('Should set page to login if action.type = types.LOGIN.', () => {
    const action = { type: types.LOGIN };
    const result = navigationReducer(testState, action);
    testState.page = 'login';
    expect(result).toEqual(testState);
  })

  test('Should set page to community if action.type = types.COMMUNITY.', () => {
    const action = { type: types.COMMUNITY };
    const result = navigationReducer(testState, action);
    testState.page = 'community';
    expect(result).toEqual(testState);
  })

  test('Should set page to profile if action.type = types.PROFILE.', () => {
    const action = { type: types.PROFILE };
    const result = navigationReducer(testState, action);
    testState.page = 'profile';
    expect(result).toEqual(testState);
  })
})