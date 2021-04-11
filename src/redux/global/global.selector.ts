import { State } from "../reducer";

export const selectMarket = (state: State) => state.global.market;

export const selectWorld = (state: State) => state.global.world;
