import { SagaIterator } from 'redux-saga';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { getAllianceChanges, getPlayerChanges } from '../../api/scoreboard';
import { transformChanges } from '../../utils/scoreboard.utils';
import { selectMarket, selectWorld } from '../global/global.selector';
import { getStatisticsFailure, getStatisticsStart, getStatisticsSuccess } from './scoreboard.reducer';
import { selectDate } from './scoreboard.selector';

function* getStatisticsSaga(): SagaIterator<void> {
  const market = yield select(selectMarket);
  const world = yield select(selectWorld);
  const date = yield select(selectDate);

  const isDateToday = new Date(date).getDate() === new Date().getDate();

  try {
    const playerChanges = yield call(getPlayerChanges, `${market}${world}`, isDateToday ? null : date);
    const allianceChanges = yield call(getAllianceChanges, `${market}${world}`, isDateToday ? null : date);

    const playerRanking = yield call(transformChanges, playerChanges);
    const allianceRanking = yield call(transformChanges, allianceChanges);

    yield put(getStatisticsSuccess({ playerRanking, allianceRanking }));
  } catch (e) {
    yield put(getStatisticsFailure());
  }
}

function* onGetStatisticsStart(): SagaIterator<void> {
  yield takeLatest(getStatisticsStart, getStatisticsSaga);
}

export function* scoreboardSaga(): SagaIterator<void> {
  yield all([call(onGetStatisticsStart)]);
}
