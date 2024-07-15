import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

const persistConfig = {
  key: "root",
  blackList: ["user"],
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const middleWares = [logger, sagaMiddleware];
const composedMiddleWare = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedMiddleWare
);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
