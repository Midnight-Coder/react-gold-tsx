import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import RootReducer from 'RootReducer';
import RootSaga from 'RootSaga';


const getStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));
  const store = createStore(RootReducer, enhancers);
  sagaMiddleware.run(RootSaga);

  return store;
};

export default getStore();
