import { SagaIterator } from "redux-saga";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getActiveWorlds } from "../../api/scoreboard";
import { changeWorld, getServerListFailure, getServerListStart, getServerListSuccess } from "./global.reducer";

function* getServerList(): SagaIterator<void> {
  try {
    const serverList = yield call(getActiveWorlds);

    yield put(changeWorld({ market: "en", world: "132" }));
    yield put(getServerListSuccess(serverList));
  } catch (e) {
    yield put(getServerListFailure());
  }
}

function* onGetServerListStart(): SagaIterator<void> {
  yield takeLatest(getServerListStart, getServerList);
}

export function* globalSaga(): SagaIterator<void> {
  yield all([call(onGetServerListStart)]);
}
