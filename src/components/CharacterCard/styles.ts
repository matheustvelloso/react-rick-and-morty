import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IVerifyProps {
  status: string;
}

export const Div = styled.div`
  height: 100%;
  background-color: #3c3e44;
  border-radius: 8px;
  color: #f5f5f5;
  img {
    border-radius: 8px 0 0 8px;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  @media (max-width: 992px) {
    img {
      border-radius: 8px 8px 0 0;
    }
  }
`;

export const Verify = styled.p<IVerifyProps>`
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: ${({ status }) => {
    switch (status) {
      case 'Alive':
        return '#55cc44';
      case 'Dead':
        return '#d63d2e';
      default:
        return '#9e9e9e';
    }
  }};
  border-radius: 50%;
  margin-top: 8px;
`;

export const LinkCharacter = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #ff9800;
  }
`;
