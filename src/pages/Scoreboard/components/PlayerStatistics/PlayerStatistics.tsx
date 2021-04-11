import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import ScoreTable from '../ScoreTable/ScoreTable';
import { faTimesCircle, faTrophy } from '@fortawesome/free-solid-svg-icons';
import citiesGained from '../../../../assets/icons/city-plus.png';
import shield from '../../../../assets/icons/shield.png';
import swords from '../../../../assets/icons/swords.png';
import colors from '../../../../components/Layout/Header/colors';
import citiesLost from '../../../../assets/icons/city-minus.png';
import { useSelector } from 'react-redux';
import { State } from '../../../../redux/reducer';

const PlayerStatistics: React.FC = () => {
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const { playerRanking, status } = useSelector((state: State) => state.scoreboard);

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
    setRowsPerPage(parseInt(event.target.value, 10));

  return (
    <React.Fragment>
      <Grid container item alignItems={'center'} justifyContent={'center'} xs={12} sm={6} lg={3}>
        <ScoreTable
          title="Attack points"
          titleIcon={swords}
          headerTitles={['Rank', 'Player', 'Points']}
          headerColor="#FA8072"
          firstPlaceIcon={faTrophy}
          firstPlaceIconColor="#daa520"
          loading={status.loading}
          rowsPerPage={rowsPerPage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          data={playerRanking?.attack || []}
        />
      </Grid>
      <Grid container item alignItems={'center'} justifyContent={'center'} xs={12} sm={6} lg={3}>
        <ScoreTable
          title="Defense points"
          titleIcon={shield}
          headerTitles={['Rank', 'Player', 'Points']}
          headerColor="#6495ED"
          firstPlaceIcon={faTrophy}
          firstPlaceIconColor="#daa520"
          loading={status.loading}
          rowsPerPage={rowsPerPage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          data={playerRanking?.defense || []}
        />
      </Grid>
      <Grid container item alignItems={'center'} justifyContent={'center'} xs={12} sm={6} lg={3}>
        <ScoreTable
          title="Cities conquered"
          titleIcon={citiesGained}
          headerTitles={['Rank', 'Player', 'Towns']}
          headerColor={colors.seaGreen}
          firstPlaceIcon={faTrophy}
          firstPlaceIconColor="#daa520"
          loading={status.loading}
          rowsPerPage={rowsPerPage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          data={playerRanking?.conquest || []}
        />
      </Grid>
      <Grid container item alignItems={'center'} justifyContent={'center'} xs={12} sm={6} lg={3}>
        <ScoreTable
          title="Cities lost"
          titleIcon={citiesLost}
          headerTitles={['Rank', 'Player', 'Towns']}
          headerColor="#7b7b7b"
          firstPlaceIcon={faTimesCircle}
          firstPlaceIconColor="#e03c31"
          loading={status.loading}
          rowsPerPage={rowsPerPage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          data={playerRanking?.loses || []}
        />
      </Grid>
    </React.Fragment>
  );
};

export default PlayerStatistics;
