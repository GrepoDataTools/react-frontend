import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from './DesktopMenu.styled';
import { useSelector } from 'react-redux';
import { isSignedIn } from '../../../redux/user/user.selector';
import UserBox from '../UserBox/UserBox';

const DesktopMenu: React.FC = () => {
  const signedIn = useSelector(isSignedIn);

  return (
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
      <Grid container item xs={2} alignItems="center" justifyContent="flex-end" style={{ paddingRight: 20 }}>
        {!signedIn ? (
          <>
            <Link to="/sign-in" activeClassName="active">
              Sign In
            </Link>
            <Link to="/sign-up" activeClassName="active">
              Sign Up
            </Link>
          </>
        ) : (
          <UserBox />
        )}
      </Grid>
    </React.Fragment>
  );
};

export default DesktopMenu;
