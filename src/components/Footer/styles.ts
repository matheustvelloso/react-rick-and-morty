import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 20px;
  color: #9e9e9e;

  @media (max-width: 575px) {
    & > li {
      margin-bottom: 28px;
    }
  }
  @media (min-width: 576px) {
    & > li {
      margin-right: 16px;
    }
  }
`;
export const LinkMedias = styled.a`
  color: #9e9e9e;
  font-size: 30px;
  font-weight: 700;

  &:hover {
    color: #ff9800;
  }

  &:not(:last-child) {
    padding-right: 28px;
  }
`;

export const Span = styled.span`
  color: #9e9e9e;
`;

export const LinkDeveloper = styled(Link)`
  color: #fff;
  text-decoration: underline #ff9800;

  &:hover {
    color: #ff9800;
    text-decoration: none;
  }
`;

export const LinkPages = styled(Link)`
  color: #9e9e9e;
  text-decoration: none;

  &:hover {
    color: #ff9800;
  }
`;
