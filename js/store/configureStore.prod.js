import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import reducers from '../reducers';

export default function configureStore(initialState = {}) {
  const middleware = [ thunk ];

  const enhancer = compose(
    applyMiddleware(...middleware)
  );

  const store = createStore(
    reducers,
    initialState,
    enhancer
  );

  const persistor = persistStore(store);

  return { persistor, store };
};
