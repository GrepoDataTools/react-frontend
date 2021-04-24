import React from 'react';
import { FooterContainer } from './Footer.styled';
import Grid from '@material-ui/core/Grid';

const Footer: React.FC = () => (
  <FooterContainer>
    <Grid container>
      <Grid item xs={12} md={8}>
        Grepolis is a browser game by InnoGames GmbH. This is an unofficial 3rd party site Gameplay images related to
        Grepolis are copyright of InnoGames GmbH.
      </Grid>
      <Grid item xs={12} md={4}>
        Copyright © Grepodata 2021
        <br />
        Disclaimer | Privacy
      </Grid>
    </Grid>
  </FooterContainer>
);

export default Footer;
