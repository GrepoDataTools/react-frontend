import { IndexListResponse } from '../types/Indexer';

export const transformIndexList = (indexes: IndexListResponse) => {
  return indexes.items.map((index) => {
    return {
      ...index,
      allowJoinV1Key: index.allow_join_v1_key,
      createdAt: index.created_at,
      indexVersion: index.index_version,
      numDays: index.num_days,
      shareLink: index.share_link,
      stats: {
        enemyAttacks: index.stats.enemy_attacks,
        friendlyAttacks: index.stats.friendly_attacks,
        owners: index.stats.owners.map((owner) => {
          return { allianceId: owner.alliance_id, allianceName: owner.alliance_name, ...owner };
        }),
        spyReports: index.stats.spy_reports,
        totalReports: index.stats.total_reports,
      },
      updatedAt: index.updated_at,
      worldStopped: index.world_stopped,
    };
  });
};
