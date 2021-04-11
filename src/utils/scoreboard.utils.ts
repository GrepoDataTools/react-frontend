import { ScoreboardDifferenceResponse } from '../types/Scoreboard';

export const sliceName = (name: string) => (name.length > 15 ? `${name.slice(0, 15)}...` : name);

export const transformChanges = (changes: ScoreboardDifferenceResponse) => {
  const attack = changes.att.map((shard, index) => ({ id: shard.i, points: shard.s, name: shard.n, index: index + 1 }));

  const defense = changes.def.map((shard, index) => ({
    id: shard.i,
    points: shard.s,
    name: shard.n,
    index: index + 1,
  }));

  const conquest = changes.con.map((shard, index) => ({
    id: shard.i,
    points: shard.s,
    name: shard.n,
    index: index + 1,
  }));

  const loses = changes.los.map((shard, index) => ({ id: shard.i, points: shard.s, name: shard.n, index: index + 1 }));

  return { attack, defense, conquest, loses };
};
