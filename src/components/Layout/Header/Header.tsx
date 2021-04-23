import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Navigation, LogoTitle, LogoGreen, LogoWhite } from './Header.styled';
import Hamburger from 'hamburger-react';
import DesktopMenu from '../Menu/DesktopMenu';
import MobileMenu from '../Menu/MobileMenu';
import colors from '../../../utils/colors';
import { useHistory } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMobileView, setIsMobileView] = useState<boolean>(window.matchMedia('(max-width: 795px)').matches);

  const history = useHistory();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const checkForMobileView = () => setIsMobileView(window.matchMedia('(max-width: 795px)').matches);
  const navigateToHome = () => history.push('/');

  useEffect(() => {
    window.addEventListener('resize', checkForMobileView);

    return function () {
      window.removeEventListener('resize', checkForMobileView);
    };
  }, []);

  return (
    <React.Fragment>
      <Navigation>
        <Grid container>
          <Grid container item xs={2} sm={1} lg={2} alignItems="center">
            <LogoTitle onClick={navigateToHome}>
              <LogoWhite>{isMobileView ? 'G' : 'GREPO'}</LogoWhite>
              <LogoGreen>{isMobileView ? 'D' : 'DATA'}</LogoGreen>
            </LogoTitle>
          </Grid>
          {isMobileView ? (
            <Grid container xs={10} justifyContent="flex-end" alignItems="center">
              <Hamburger onToggle={toggleMobileMenu} color={colors.seaGreen} />
            </Grid>
          ) : (
            <DesktopMenu />
          )}
        </Grid>
      </Navigation>
      <MobileMenu open={isMobileMenuOpen} />
    </React.Fragment>
  );
};

export default Header;
