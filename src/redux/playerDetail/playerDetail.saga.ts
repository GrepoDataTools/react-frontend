import { all, takeLatest } from 'redux-saga/effects';
import { getPlayerDetailStart } from './playerDetail.reducer';

export function* getDetailSaga() {}

export function* onGetPlayerDetailStart() {
  yield takeLatest(getPlayerDetailStart, getDetailSaga);
}

export function* playerDetailSaga() {
  yield all([]);
}
