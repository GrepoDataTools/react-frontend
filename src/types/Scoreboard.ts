import { AllianceRanking, PlayerRanking } from './Ranking';

export type ActiveWorldsResponse = Array<{
  server: string;
  timezone: string;
  worlds: Array<{
    id: string;
    val: string;
    name: string;
  }>;
}>;

export interface StatisticShard {
  i: string;
  s: number;
  n: string;
}

export interface ScoreboardDifferenceResponse {
  allowCache: boolean;
  att: Array<StatisticShard>;
  con: Array<StatisticShard>;
  def: Array<StatisticShard>;
  los: Array<StatisticShard>;
  date: string;
  minDate: string;
  fallback: false;
  nextUpdate: string;
  time: string;
  world: string;
}

export interface StatisticsPayloadSuccess {
  playerRanking: PlayerRanking;
  allianceRanking: AllianceRanking;
}

export enum ActiveView {
  PLAYERS = 'players',
  ALLIANCES = 'alliances',
}
