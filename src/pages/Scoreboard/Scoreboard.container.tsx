import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../redux/reducer';
import { getStatisticsStart } from '../../redux/scoreboard/scoreboard.reducer';
import Scoreboard from './Scoreboard';

const ScoreboardContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { playerRanking, allianceRanking } = useSelector((state: State) => state.scoreboard);

  const getRanking = useCallback(() => {
    if (!playerRanking || !allianceRanking) dispatch(getStatisticsStart());
  }, [allianceRanking, dispatch, playerRanking]);

  useEffect(() => {
    getRanking();
  }, [getRanking]);

  return <Scoreboard />;
};

export default ScoreboardContainer;
