import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import { helloSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

sagaMiddleware.run(helloSaga);

export default store;
