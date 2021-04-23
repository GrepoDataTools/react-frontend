import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-right: 5px;
  padding-left: 5px;
`;

export const CardTitle = styled.h3`
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 38px;
  color: #444;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const CardSubtitle = styled.p`
  font-weight: 200;
  text-align: center;
  width: 80%;
`;

export const CardIconContainer = styled.span`
  background-color: #18bc9c;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border-radius: 50%;
  margin-right: 4px;
  text-align: center;
  height: 60px;
  width: 60px;
  line-height: 60px;
  font-size: 1.7rem;
  margin-top: 20px;
`;
