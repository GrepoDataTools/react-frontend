import React from 'react';
import { HeroContainer, HeroContent, LogoWhite, LogoGreen, LogoSubtitle, LogoTitle } from './Home.styled';
import Overview from './components/Overview/Overview';

const Home: React.FC = () => (
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
    <Overview />
  </React.Fragment>
);

export default Home;
