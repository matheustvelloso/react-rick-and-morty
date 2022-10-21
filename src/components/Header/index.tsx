import { memo, useState } from 'react';

import { VscThreeBars, VscChromeClose } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

import Logo from 'assets/Logo.jpeg';

import { H3, LinkHeader, List, MenuMobile, MenuOverlay, Nav } from './styles';

const Header: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <>
      <MenuOverlay
        isMenuOpened={isMenuOpened}
        onClick={() => setIsMenuOpened(false)}
        className="d-flex d-md-none position-fixed h-100 w-100"
      />
      <MenuMobile
        isMenuOpened={isMenuOpened}
        className="d-flex flex-column d-md-none position-fixed bg-dark"
      >
        <VscChromeClose
          onClick={() => setIsMenuOpened(false)}
          className="text-white align-self-end mb-5"
        />
        <H3>Rick And Morty</H3>
        <hr />
        <Nav>
          <LinkHeader to="/">Characters</LinkHeader>
          <hr />
          <LinkHeader to="/locations">Locations</LinkHeader>
          <hr />
          <LinkHeader to="/episodes">Episodes</LinkHeader>
          <hr />
        </Nav>
      </MenuMobile>
      <header className="d-flex justify-content-between">
        <Link to="/" className="p-3">
          <img src={Logo} alt="Logo" />
        </Link>
        <nav className="d-none d-sm-flex justify-content-between home-icon">
          <List className="d-flex">
            <li>
              <LinkHeader to="/">Characters</LinkHeader>
            </li>
            <li>
              <LinkHeader to="/locations">Locations</LinkHeader>
            </li>
            <li>
              <LinkHeader to="/episodes">Episodes</LinkHeader>
            </li>
          </List>
        </nav>
        <VscThreeBars
          onClick={() => setIsMenuOpened(true)}
          className="fs-icon align-self-center mx-3 d-block d-sm-none"
        />
      </header>
    </>
  );
};

export default memo(Header);
