import { combineReducers } from 'redux';

import navigationReducer from './navigationReducer';
import textFieldReducer from './textFieldReducer';

const reducers = combineReducers({
  navigation: navigationReducer,
  textField: textFieldReducer,
});

export default reducers;
