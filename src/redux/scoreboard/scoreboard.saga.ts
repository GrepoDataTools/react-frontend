import { SagaIterator } from "redux-saga";
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { getAllianceChanges, getPlayerChanges } from "../../api/scoreboard";
import { transformChanges } from "../../utils/scoreboard.utils";
import { selectMarket, selectWorld } from "../global/global.selector";
import { getStatisticsFailure, getStatisticsStart, getStatisticsSuccess } from "./scoreboard.reducer";

function* getStatistics(): SagaIterator<void> {
  const market = yield select(selectMarket);
  const world = yield select(selectWorld);

  try {
    const playerChanges = yield call(getPlayerChanges, `${market}${world}`);
    const allianceChanges = yield call(getAllianceChanges, `${market}${world}`);

    const playerRanking = yield call(transformChanges, playerChanges);
    const allianceRanking = yield call(transformChanges, allianceChanges);

    yield put(getStatisticsSuccess({ playerRanking, allianceRanking }));
  } catch (e) {
    yield put(getStatisticsFailure());
  }
}

function* onGetStatisticsStart(): SagaIterator<void> {
  yield takeLatest(getStatisticsStart, getStatistics);
}

export function* scoreboardSaga(): SagaIterator<void> {
  yield all([call(onGetStatisticsStart)]);
}
