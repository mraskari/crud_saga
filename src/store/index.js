import { applyMiddleware, combineReducers, createStore } from "redux";
import { postsListReducer, expandedAccardion } from "./reducers";
import { watcherSaga } from "./sagas/rootSaga";
import createSagaMiddleware from "redux-saga";

const reducers = combineReducers({
  postsReducersKey: postsListReducer,
  expandedAccardionKey: expandedAccardion,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);

export default store;
