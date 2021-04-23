import React from 'react';
import { OverviewContainer, OverviewContent } from './Overview.styled';
import { Grid } from '@material-ui/core';
import AdvantageCard from '../AdvantageCard/AdvantageCard';
import { faChartBar, faWrench } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Search from '../../../../components/Search/Search';

const Overview: React.FC = () => (
  <OverviewContainer>
    <OverviewContent>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Search />
        </Grid>
        <Grid item xs={12} md={4}>
          <AdvantageCard
            icon={faChartBar}
            title={'Game statistics'}
            subtitle={
              <>
                We collect data from the Grepolis API once every hour. You can browse daily scoreboards for each game
                world as well as detailed player and alliance statistics.
              </>
            }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AdvantageCard
            icon={faGithub}
            title={'Open source'}
            subtitle={
              <>
                GrepoData is 100% open source! Interested in contributing? Check out our{' '}
                <a href="https://github.com/GrepoDataTools">GitHub</a> page.
              </>
            }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AdvantageCard
            icon={faWrench}
            title={'Tools'}
            subtitle={
              <>
                Add our Discord bot to your server or get started using our city indexer userscript to collect & share
                enemy intelligence with your alliance.
              </>
            }
          />
        </Grid>
      </Grid>
    </OverviewContent>
  </OverviewContainer>
);

export default Overview;
