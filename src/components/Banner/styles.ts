import styled from 'styled-components';

import BannerHeader from 'assets/BannerHeader.jpeg';

export const Div = styled.div`
  background-image: url(${BannerHeader});
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center center;
  min-height: 430px;
  text-align: center;
`;

export const H1 = styled.div`
  color: #202329;
  font-weight: 900;
  font-size: 5.625rem;

  @media (max-width: 575px) {
    font-size: 3.75rem;
  }
`;
