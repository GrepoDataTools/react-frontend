import styled from 'styled-components';
import colors from '../../utils/colors';

export const Container = styled.div`
  position: relative;
  width: 60%;
  margin: auto;
  border-radius: 15px;
  background: white;
  padding: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  &:before {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    content: 'or';
    color: gray;
    height: 0.5em;
    width: 0.5em;
    top: 1.75em;
  }
  &:after {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    content: '';
    background: rgba(128, 128, 128, 0.3);
    height: 100%;
    width: 0.12em;
    z-index: 900;
  }
`;

export const Title = styled.h2`
  color: ${colors.seaGreen};
  margin: auto;
  font-size: 2rem;
  text-align: center;
  padding-bottom: 50px;
`;

export const EmailSignUp = styled.div``;
