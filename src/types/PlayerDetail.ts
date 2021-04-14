import { Heatmap } from './Heatmap';

export interface PlayerDetailResponse {
  alliance_id: number;
  alliance_name: string;
  att: number;
  att_old: number;
  att_rank: number;
  att_rank_date: string;
  att_rank_nax: number;
  def: number;
  def_old: number;
  def_rank: number;
  def_rank_date: string;
  def_rank_max: number;
  fight_rank: number;
  fight_rank_date: string;
  fight_rank_max: number;
  grep_id: number;
  heatmap: Heatmap;
  name: string;
  points: number;
  rank: number;
  rank_date: string;
  rank_max: number;
  towns: number;
  towns_date: string;
  towns_max: number;
  world: string;
}

export interface PlayerDetailRankingShard {
  current: number;
  old: number;
  rank: number;
  maximum: number;
  maximumDate: string;
}

export interface PlayerDetail {
  id: number;
  name: string;
  alliance: {
    id: number;
    name: string;
  };
  rankings: {
    points: number;
    rank: number;
    maximumRank: number;
    maximumRankDate: string;
    towns: number;
    maximumTowns: number;
    maximumTownsDate: string;
    attack: PlayerDetailRankingShard;
    defense: PlayerDetailRankingShard;
    fight: PlayerDetailRankingShard;
  };
  heatmap: Heatmap;
  world: string;
}

export interface PlayerDetailRouterParams {
  market: string;
  playerId: string;
}
