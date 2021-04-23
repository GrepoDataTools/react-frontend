import React from 'react';
import { Avatar, Grid } from '@material-ui/core';
import { Link } from './DesktopMenu.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import colors from '../../../utils/colors';

const DesktopMenu: React.FC = () => (
  <React.Fragment>
    <Grid container item xs={8} alignItems="center">
      <Link to="/scoreboard" activeClassName="active">
        Scoreboard
      </Link>
      <Link to="/compare" activeClassName="active">
        Compare
      </Link>
      <Link to="/rankings" activeClassName="active">
        Rankings
      </Link>
      <Link to="/indexer" activeClassName="active">
        City Indexer
      </Link>
      <Link to="/discord" activeClassName="active">
        Discord
      </Link>
      <Link to="/contract" activeClassName="active">
        Contact
      </Link>
    </Grid>
    <Grid container item xs={2} alignItems="center" justifyContent="flex-end">
      <FontAwesomeIcon icon={faBell} color={colors.snowDrop} style={{ marginRight: 20, fontSize: '1.5rem' }} />
      <Avatar alt="My account" src="/images/avatar.png" style={{ marginRight: 20 }} />
    </Grid>
  </React.Fragment>
);

export default DesktopMenu;
