import birdsReducer from '../../../client/redux/reducers/birdsReducer';
import * as types from '../../../client/redux/constants/actionTypes';

describe('birdsReducer testing suite.', () => {
  let testState;
  beforeEach(() => testState = {
    seenBirds: [],
    localBirds: []
  })

  test('Should set initial state if no arguments are given.', () => {
    const result = birdsReducer();
    expect(result).toEqual(testState);
  })

  test('Should set seenBirds if action type is types.UPDATE_SEEN_BIRDS.', () => {
    const action = { type: types.UPDATE_SEEN_BIRDS, payload: ['blue jay', 'robin'] };
    const result = birdsReducer(testState, action);
    testState.seenBirds = action.payload;
    expect(result).toEqual(testState);
  })

  test('Should set localBirds if action type is types.UPDATE_LOCAL_BIRDS.', () => {
    const action = { type: types.UPDATE_LOCAL_BIRDS, payload: ['blue jay', 'robin'] };
    const result = birdsReducer(testState, action);
    testState.localBirds = action.payload;
    expect(result).toEqual(testState);
  })
})