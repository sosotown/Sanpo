import { AsyncStorage } from 'react-native';
import { persistCombineReducers } from 'redux-persist';

import test from './test';
import generalUI from './generalUI';

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'app',
    'auth'
  ]
};

export default persistCombineReducers(config, {
  test,
  generalUI,
});
