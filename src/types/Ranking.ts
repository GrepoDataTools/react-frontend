export interface RankShard {
  name: string;
  points: number;
  id: string;
  index: number;
}

export interface Ranking {
  attack: Array<RankShard>;
  defense: Array<RankShard>;
  conquest: Array<RankShard>;
  loses: Array<RankShard>;
}

export interface PlayerRanking extends Ranking {}
export interface AllianceRanking extends Ranking {}
