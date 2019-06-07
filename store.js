import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import rootSaga from "./sagas";

const devtools =
  (__DEV__ && global.reduxNativeDevTools) || (() => noop => noop);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    devtools()
  )
);

sagaMiddleware.run(rootSaga);

export default store;
