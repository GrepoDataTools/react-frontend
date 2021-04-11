import { combineReducers } from "redux";
import globalReducer from "./global/global.reducer";
import scoreboardReducer from "./scoreboard/scoreboard.reducer";

const rootReducer = combineReducers({
  global: globalReducer,
  scoreboard: scoreboardReducer,
});

export type State = ReturnType<typeof rootReducer>;

export default rootReducer;
