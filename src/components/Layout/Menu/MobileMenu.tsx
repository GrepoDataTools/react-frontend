import React from "react";
import { Hidden } from "@material-ui/core";
import { Link, MenuContainer, MenuItems } from "./MobileMenu.styled";

interface IMobileMenu {
  open: boolean;
}

const MobileMenu: React.FC<IMobileMenu> = ({ open }) => {
  return (
    <Hidden mdUp={true} mdDown={!open}>
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
        </MenuItems>
      </MenuContainer>
    </Hidden>
  );
};

export default MobileMenu;
