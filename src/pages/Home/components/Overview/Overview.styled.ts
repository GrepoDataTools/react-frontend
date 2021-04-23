import styled from 'styled-components';
import { theme } from '../../../../utils/theme.utils';

export const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OverviewContent = styled.div`
  background: white;
  margin-top: -100px;
  padding-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
  min-height: 250px;
  padding-bottom: 30px;

  ${[theme.breakpoints.up('lg')]} {
    width: 1170px;
  }
  ${[theme.breakpoints.between(theme.breakpoints.values.xs, theme.breakpoints.values.lg)]} {
    width: 80%;
  }
`;
