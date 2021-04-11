import { State } from '../reducer';

export const selectDate = (state: State) => state.scoreboard.date;
