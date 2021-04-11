import { SagaIterator } from "redux-saga";
import { all, call } from "redux-saga/effects";
import { globalSaga } from "./global/global.saga";
import { scoreboardSaga } from "./scoreboard/scoreboard.saga";

export default function* rootSaga(): SagaIterator<void> {
  yield all([call(globalSaga), call(scoreboardSaga)]);
}
