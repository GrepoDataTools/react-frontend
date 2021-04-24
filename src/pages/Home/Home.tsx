import React from 'react';
import {
  HeroContainer,
  HeroContent,
  LogoWhite,
  LogoGreen,
  LogoSubtitle,
  LogoTitle,
  ContentContainer,
  ContactUsButton,
} from './Home.styled';
import Overview from './components/Overview/Overview';
import FeatureCard from './components/FeatureCard/FeatureCard';
import Grid from '@material-ui/core/Grid';
import Compare from '../../assets/features/compare.png';
import Discord from '../../assets/features/discord.png';
import Indexer from '../../assets/features/indexer.png';
import Player from '../../assets/features/player.png';
import Scoreboard from '../../assets/features/scoreboard.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();

  const handleContactUsClick = () => history.push('/contact');

  return (
    <React.Fragment>
      <HeroContainer>
        <HeroContent>
          <LogoTitle>
            <LogoWhite>GREPO</LogoWhite>
            <LogoGreen>DATA</LogoGreen>
          </LogoTitle>
          <LogoSubtitle>Advanced tools and statistics for the MMOG Grepolis</LogoSubtitle>
        </HeroContent>
      </HeroContainer>
      <ContentContainer>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Overview />
          </Grid>
          <Grid item md={6} lg={4} display={'flex'} width={'100%'}>
            <FeatureCard image={Scoreboard} title={'Daily scoreboad'} ctaText={'View rankings'} />
          </Grid>
          <Grid item md={6} lg={4} display={'flex'} width={'100%'}>
            <FeatureCard image={Player} title={'Player & Alliance statistics'} ctaText={'Explore'} />
          </Grid>
          <Grid item md={6} lg={4} display={'flex'} width={'100%'}>
            <FeatureCard image={Compare} title={'Compare'} ctaText={'Start comparing'} />
          </Grid>
          <Grid item md={6} lg={6} display={'flex'} width={'100%'}>
            <FeatureCard image={Discord} title={'Discord bot'} ctaText={'Add to discord'} />
          </Grid>
          <Grid item md={6} lg={6} display={'flex'} width={'100%'}>
            <FeatureCard image={Indexer} title={'UserScript: City Indexer'} ctaText={'Create your indexer now'} />
          </Grid>
          <Grid item xs={12} display={'flex'} justifyContent={'center'}>
            <ContactUsButton
              variant="contained"
              onClick={handleContactUsClick}
              size={'large'}
              endIcon={<FontAwesomeIcon icon={faComments} />}
              disableElevation
            >
              Contact us
            </ContactUsButton>
          </Grid>
        </Grid>
      </ContentContainer>
    </React.Fragment>
  );
};

export default Home;
