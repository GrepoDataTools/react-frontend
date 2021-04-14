import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PlayerDetailRouterParams } from '../../types/PlayerDetail';
import { useDispatch } from 'react-redux';
import { getPlayerDetailStart } from '../../redux/playerDetail/playerDetail.reducer';

const PlayerDetailContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { market, playerId } = useParams<PlayerDetailRouterParams>();

  useEffect(() => {
    dispatch(getPlayerDetailStart({ market, playerId }));
  }, [market, playerId, dispatch]);

  return <></>;
};

export default PlayerDetailContainer;
