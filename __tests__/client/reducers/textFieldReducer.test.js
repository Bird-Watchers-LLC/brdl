import textFieldReducer from '../../../client/redux/reducers/textFieldReducer';
import * as types from '../../../client/redux/constants/actionTypes';

describe('textFieldReducer testing suite.', () => {
  let testState;
  beforeEach(() => testState = {
    username: '',
    password: '',
    fullName: '',
    message: '',
    response: { valid: false },
    validUser: undefined,
    validLogin: undefined,
    lat: '',
    long: '',
  })

  test('Should set initial state if no arguments are given.', () => {
    const result = textFieldReducer();
    expect(result).toEqual(testState);
  })

  test('Should update lat and long if action.type = types.UPDATE_LOCATION', () => {
    const action = { type: types.UPDATE_LOCATION, payload: { lat: '25', long: '40' } };
    const result = textFieldReducer(testState, action);
    testState.lat = action.payload.lat;
    testState.long = action.payload.long;
    expect(result).toEqual(testState);
  })

  test('Should change validUser to false if action.type = types.CREATE_ACCOUNT_SUBMIT', () => {
    const action = { type: types.CREATE_ACCOUNT_SUBMIT };
    const result = textFieldReducer(testState, action);
    testState.validUser = false;
    expect(result).toEqual(testState);
  })

  test('Should change validUser to false if action.type = types.LOGIN_SUBMIT', () => {
    const action = { type: types.LOGIN_SUBMIT };
    const result = textFieldReducer(testState, action);
    testState.validLogin = false;
    expect(result).toEqual(testState);
  })
})