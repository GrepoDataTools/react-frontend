import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const Container = styled.div`
  background: white;
  padding: 15px;
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  flex-grow: 1;
`;

export const Image = styled.img`
  max-height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
`;

export const Title = styled.h3`
  text-align: center;
  text-transform: uppercase;
  padding: 15px 0;
  border-bottom: double #eee;
  color: #444;
`;

export const CtaButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const CtaButton = styled(Button)`
  color: white;
`;
