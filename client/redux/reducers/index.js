import { combineReducers } from 'redux';

import navigationReducer from './navigationReducer';
import textFieldReducer from './textFieldReducer';
import responsesReducer from './responsesReducer';

const reducers = combineReducers({
  navigation: navigationReducer,
  textField: textFieldReducer,
  responses: responsesReducer,
});

export default reducers;
