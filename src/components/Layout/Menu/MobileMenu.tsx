import React from 'react';
import { Hidden } from '@material-ui/core';
import { Link, MenuContainer, MenuItems } from './MobileMenu.styled';
import { useSelector } from 'react-redux';
import { selectStatus, selectUser } from '../../../redux/user/user.selector';

interface IMobileMenu {
  open: boolean;
}

const MobileMenu: React.FC<IMobileMenu> = ({ open }) => {
  const { signedIn } = useSelector(selectStatus);
  const { username } = useSelector(selectUser);

  return (
    <Hidden lgUp={true} lgDown={!open}>
      <MenuContainer>
        <MenuItems>
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
            <span>{username}</span>
          )}
        </MenuItems>
      </MenuContainer>
    </Hidden>
  );
};

export default MobileMenu;
