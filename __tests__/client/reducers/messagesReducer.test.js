import messagesReducer from '../../../client/redux/reducers/messagesReducer';
import * as types from '../../../client/redux/constants/actionTypes';

describe('messagesReducer testing suite.', () => {
  let testState;
  beforeEach(() => testState = {
    communityMessages: [],
    friendMessages: []
  })

  test('Should set initial state if no arguments are given.', () => {
    const result = messagesReducer();
    expect(result).toEqual(testState);
  })

  test('Should set communityMessages if action type is types.UPDATE_COMMUNITY_MESSAGES.', () => {
    const action = { type: types.UPDATE_COMMUNITY_MESSAGES, payload: ['hello', 'world'] };
    const result = messagesReducer(testState, action);
    testState.communityMessages = action.payload;
    expect(result).toEqual(testState);
  })

  test('Should set friendMessages if action type is types.UPDATE_FRIEND_MESSAGES.', () => {
    const action = { type: types.UPDATE_FRIEND_MESSAGES, payload: ['hello', 'world'] };
    const result = messagesReducer(testState, action);
    testState.friendMessages = action.payload;
    expect(result).toEqual(testState);
  })
})