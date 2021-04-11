import axios from 'axios';
import { ActiveWorldsResponse, ScoreboardDifferenceResponse } from '../types/Scoreboard';
import { objectToUrlParams } from '../utils/url.utils';

export const getActiveWorlds = (): Promise<ActiveWorldsResponse> => {
  return axios.get(`${process.env.REACT_APP_API_URL}/world/active`).then((response) => response.data);
};

export const getPlayerChanges = (world: string, date?: Date): Promise<ScoreboardDifferenceResponse> => {
  const urlParams = objectToUrlParams({
    world,
    date,
  });

  return axios.get(`${process.env.REACT_APP_API_URL}/scoreboard/player?${urlParams}`).then((response) => response.data);
};

export const getAllianceChanges = (world: string, date?: Date): Promise<ScoreboardDifferenceResponse> => {
  const urlParams = objectToUrlParams({
    world,
    date,
  });

  return axios
    .get(`${process.env.REACT_APP_API_URL}/scoreboard/alliance?${urlParams}`)
    .then((response) => response.data);
};
