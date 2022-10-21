import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

interface IMenuProps {
  isMenuOpened: boolean;
}

const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;
const fadeOut = keyframes`
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`;
const enter = keyframes`
    from{
        right: -160px;
    }
    to{
        right: 0;
    }
`;
const leave = keyframes`
    from{
        right: 0;
    }
    to{
        right: -160px;
    }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 20px;

  & > li:not(:last-child) {
    margin-right: 36px;
  }
`;

export const LinkHeader = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 700;
  border: none;

  &:hover {
    color: #ff9800;
  }
`;
export const MenuMobile = styled.div<IMenuProps>`
  height: 100vh;
  right: ${(props) => (props.isMenuOpened ? 0 : -160)}px;
  padding: 30px;
  width: 160px;
  animation: ${(props) => (props.isMenuOpened ? enter : leave)} 0.2s ease-out;
  transition: all 0.2s ease-out;
`;
export const MenuOverlay = styled.div<IMenuProps>`
  opacity: ${(props) => (props.isMenuOpened ? 1 : 0)};
  visibility: ${(props) => (props.isMenuOpened ? 'visible' : 'hidden')};
  animation: ${(props) => (props.isMenuOpened ? fadeIn : fadeOut)} 0.2s ease-out;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-out;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  & > a {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }
  a:hover {
    color: #ff9800;
  }
`;

export const H3 = styled.h3`
  color: #ff9800;
  font-size: 20px;
`;
