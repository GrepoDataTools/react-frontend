import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllianceRanking, PlayerRanking } from '../../types/Ranking';
import { ActiveView, StatisticsPayloadSuccess } from '../../types/Scoreboard';

interface State {
  playerRanking: null | PlayerRanking;
  allianceRanking: null | AllianceRanking;
  activeView: ActiveView;
  date: Date;
  status: {
    loading: boolean;
    error: boolean;
  };
}

const initialState: State = {
  playerRanking: null,
  allianceRanking: null,
  activeView: ActiveView.PLAYERS,
  date: new Date(),
  status: {
    loading: true,
    error: false,
  },
};

const scoreboardSlice = createSlice({
  name: 'scoreboard',
  initialState,
  reducers: {
    setActiveView: (state: State, { payload }: PayloadAction<ActiveView>) => {
      return { ...state, activeView: payload };
    },
    setDate: (state: State, { payload }: PayloadAction<Date>) => {
      return { ...state, date: payload };
    },
    getStatisticsStart: (state: State) => {
      return { ...state, status: { ...state.status, loading: true } };
    },
    getStatisticsSuccess: (state: State, { payload }: PayloadAction<StatisticsPayloadSuccess>) => {
      return {
        ...state,
        playerRanking: payload.playerRanking,
        allianceRanking: payload.allianceRanking,
        status: { loading: false, error: false },
      };
    },
    getStatisticsFailure: (state: State) => {
      return { ...state, status: { loading: false, error: true } };
    },
  },
});

const { actions, reducer } = scoreboardSlice;
export const { setActiveView, setDate, getStatisticsStart, getStatisticsSuccess, getStatisticsFailure } = actions;
export default reducer;
