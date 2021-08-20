import React from 'react';
import WorldPicker from './components/WorldPicker/WorldPicker';
import PlayerStatistics from './components/PlayerStatistics/PlayerStatistics';
import Switcher from './components/Switcher/Switcher';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import { State } from '../../redux/reducer';
import { ActiveView } from '../../types/Scoreboard';
import AllianceStatistics from './components/AllianceStatistics/AllianceStatistics';

const Scoreboard: React.FC = () => {
  const { activeView } = useSelector((state: State) => state.scoreboard);
  return (
    <div style={{ padding: 20 }}>
      <Grid container justifyContent="space-between">
        <Grid item xs={'auto'}>
          <Switcher />
        </Grid>
        <Grid item xs={'auto'}>
          <WorldPicker />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {activeView === ActiveView.PLAYERS ? <PlayerStatistics /> : <AllianceStatistics />}
        <Grid item xs={12}>
          <img src="https://via.placeholder.com/2000x280" style={{ width: '100%' }} alt={'Ad placeholder'} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Scoreboard;
