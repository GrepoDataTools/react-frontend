import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import colors from '../../../utils/colors';

export const MenuContainer = styled.div`
  background-color: ${colors.fauxGreen};
  width: 100%;
`;

export const MenuItems = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const Link = styled(NavLink)`
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  padding: 0.75rem;
  text-decoration: none;

  &:not(:first-of-type) {
    margin-top: 10px;
  }

  &.active {
    background-color: rgba(24, 188, 156, 1);
  }

  &:hover:not(.active) {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
