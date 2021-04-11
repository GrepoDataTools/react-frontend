import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActiveWorldsResponse } from "../../types/Scoreboard";

interface GlobalState {
  activeWorldsList: { data: ActiveWorldsResponse | null; status: { loading: boolean; error: boolean } };
  market: null | string;
  world: null | string;
}

const initialState: GlobalState = {
  activeWorldsList: {
    data: null,
    status: {
      loading: true,
      error: false,
    },
  },
  market: null,
  world: null,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    changeWorld: (state: GlobalState, { payload }: PayloadAction<{ market: string; world: string }>) => {
      return { ...state, market: payload.market, world: payload.world };
    },
    getServerListStart: (state: GlobalState) => {
      return { ...state };
    },
    getServerListSuccess: (state: GlobalState, { payload }: PayloadAction<ActiveWorldsResponse>) => {
      return { ...state, activeWorldsList: { data: payload, status: { loading: false, error: false } } };
    },
    getServerListFailure: (state: GlobalState) => {
      return { ...state, activeWorldsList: { data: null, status: { loading: false, error: true } } };
    },
  },
});

const { actions, reducer } = globalSlice;
export const { changeWorld, getServerListStart, getServerListSuccess, getServerListFailure } = actions;
export default reducer;
