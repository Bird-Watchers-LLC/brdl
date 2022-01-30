import * as types from '../constants/actionTypes';

const testMessages = [
  { username: 'Kirk', location: { area: 'Lumberton' }, sciBirdName: 'Robin', timeStamp: '1pm' },
  { username: 'Justin', location: { area: 'Beaumont' }, sciBirdName: 'Blue Jay', timeStamp: '2pm' },
  { username: 'Calvin', location: { area: 'LA' }, sciBirdName: 'Hawk', timeStamp: '2pm' },
  { username: 'Julia', location: { area: 'LA' }, sciBirdName:  'Eagle', timeStamp: '4pm' }
];

const testSeenBirds = [
  { sciBirdName: 'Robin', timeStamp: '2pm' },
  { sciBirdName: 'Blue Jay', timeStamp: '2pm' },
  { sciBirdName: 'Eagle', timeStamp: '2pm' },
  { sciBirdName: 'Hawk', timeStamp: '2pm' },
  { sciBirdName: 'Swallow', timeStamp: '2pm' },
  { sciBirdName: 'Crane', timeStamp: '2pm' }
];

const testLocalBirds = [
  { sciBirdName: 'Robin' },
  { sciBirdName: 'Blue Jay' },
  { sciBirdName: 'Eagle' },
  { sciBirdName: 'Hawk' },
  { sciBirdName: 'Swallow' },
  { sciBirdName: 'Crane' },
  { sciBirdName: 'Pelican' }
]

const initialState = {
  mode: 'dev',
  signupPost: { valid: true },
  testMessages: testMessages,
  testSeenBirds: testSeenBirds,
  testLocalBirds: testLocalBirds
};

const responsesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default responsesReducer;
