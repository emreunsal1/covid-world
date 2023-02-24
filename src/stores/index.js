import { configureStore } from "@reduxjs/toolkit";
import countriesStore from "./countries";
import createSagaMiddleware from "redux-saga";
import mySaga from "../saga/saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    countriesStore,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(mySaga);

export default store;
