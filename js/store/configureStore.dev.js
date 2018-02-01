import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import reducers from '../reducers';

// START For DEV
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

Reactotron
  .configure({ name: 'Sanpo' })
  .use(reactotronRedux())
  .connect();
// END For DEV

export default function configureStore(initialState = {}) {
  const middleware = [ thunk ];

  const enhancer = compose(
    applyMiddleware(...middleware)
  );

  // START For DEV
  const store = Reactotron.createStore(
    reducers,
    initialState,
    enhancer
  );
  // END For DEV

  const persistor = persistStore(store);

  return { persistor, store };
};
