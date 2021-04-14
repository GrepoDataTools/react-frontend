import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlayerDetailRouterParams } from '../../types/PlayerDetail';

interface State {
  detail: any;
  status: {
    loading: boolean;
    error: boolean;
  };
}

const initialState: State = {
  detail: null,
  status: {
    loading: true,
    error: false,
  },
};

const playerDetailSlice = createSlice({
  name: 'playerDetail',
  initialState,
  reducers: {
    getPlayerDetailStart: (state: State, _action: PayloadAction<PlayerDetailRouterParams>) => {
      return { ...state };
    },
    getPlayerDetailSuccess: (state: State, { payload }: PayloadAction<any>) => {
      return { ...state, detail: payload, status: { ...state.status, loading: false } };
    },
    getPlayerDetailFailure: (state: State) => {
      return { ...state };
    },
  },
});

const { actions, reducer } = playerDetailSlice;
export const { getPlayerDetailStart, getPlayerDetailSuccess, getPlayerDetailFailure } = actions;
export default reducer;
