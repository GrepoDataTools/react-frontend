import { Response } from './Response';

export interface IndexStatisticsResponse {
  enemy_attacks: number;
  friendly_attacks: number;
  latest_report: Date;
  owners: Array<{
    alliance_id: number;
    alliance_name: string;
    contributions: number;
  }>;
  spy_reports: number;
  total_reports: number;
}

export interface IndexListResponse extends Response {
  items: Array<{
    allow_join_v1_key: number;
    contribute: number;
    created_at: Date;
    index_version: string;
    key: string;
    name: string;
    num_days: number;
    role: string;
    share_link: string;
    status: string;
    stats: IndexStatisticsResponse;
    updated_at: Date;
    world: string;
    world_stopped: boolean;
  }>;
}

export interface IndexStatistics {
  enemyAttacks: number;
  friendlyAttacks: number;
  lastReport: Date;
  owners: Array<{
    allianceId: number;
    allianceName: string;
    contributions: number;
  }>;
  spyReports: number;
  totalReports: number;
}

export interface Index {
  allowJoinV1Key: number;
  contribute: number;
  createdAt: Date;
  indexVersion: string;
  key: string;
  name: string;
  numDays: number;
  role: string;
  shareLink: string;
  status: string;
  stats: Array<IndexStatistics>;
  updatedAt: Date;
  world: string;
  worldStopped: string;
}
