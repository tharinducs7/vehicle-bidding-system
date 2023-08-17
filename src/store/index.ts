import createSagaMiddleware from "redux-saga";
import Logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, Logger));
sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof rootReducer>;
export default store;
