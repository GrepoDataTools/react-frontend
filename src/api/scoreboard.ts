import axios from "axios";
import { ActiveWorldsResponse, ScoreboardDifferenceResponse } from "../types/Scoreboard";

export const getActiveWorlds = (): Promise<ActiveWorldsResponse> => {
  return axios.get(`${process.env.REACT_APP_API_URL}/world/active`).then((response) => response.data);
};

export const getPlayerChanges = (world: string): Promise<ScoreboardDifferenceResponse> => {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/scoreboard/player?world=${world}`)
    .then((response) => response.data);
};

export const getAllianceChanges = (world: string): Promise<ScoreboardDifferenceResponse> => {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/scoreboard/alliance?world=${world}`)
    .then((response) => response.data);
};
