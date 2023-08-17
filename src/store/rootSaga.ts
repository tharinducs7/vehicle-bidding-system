import { all, fork } from "redux-saga/effects";
import vehicleSaga from "./vehicle/saga";

export function* rootSaga() {
    yield all([fork(vehicleSaga)]);
}
