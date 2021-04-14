import { combineReducers } from 'redux';
import globalReducer from './global/global.reducer';
import scoreboardReducer from './scoreboard/scoreboard.reducer';
import playerDetailReducer from './playerDetail/playerDetail.reducer';

const rootReducer = combineReducers({
  global: globalReducer,
  scoreboard: scoreboardReducer,
  playerDetail: playerDetailReducer,
});

export type State = ReturnType<typeof rootReducer>;

export default rootReducer;
