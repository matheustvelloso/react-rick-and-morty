import { memo } from 'react';

import { SiHbo, SiTwitter, SiYoutube } from 'react-icons/si';

import { LinkDeveloper, LinkMedias, LinkPages, List, Span } from './styles';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark">
      <div className="d-flex text-white flex-column align-items-center justify-content-center">
        <div className="mb-4">
          <List className="d-block d-sm-flex text-center">
            <li>
              <LinkPages to="/">Characters: 826</LinkPages>
            </li>
            <li>
              <LinkPages to="/locations">Locations: 126</LinkPages>
            </li>
            <li>
              <LinkPages to="/episodes">Episodes: 51</LinkPages>
            </li>
          </List>
        </div>
        <div className="mb-4">
          <LinkMedias
            href="https://www.youtube.com/watch?v=mb-XCaA2HZs"
            target="_blank"
          >
            <SiYoutube />
          </LinkMedias>
          <LinkMedias href="https://twitter.com/RickandMorty" target="_blank">
            <SiTwitter />
          </LinkMedias>
          <LinkMedias
            href="https://play.hbomax.com/page/urn:hbo:page:GXkRjxwjR68PDwwEAABKJ:type:series"
            target="_blank"
          >
            <SiHbo />
          </LinkMedias>
        </div>
        <div className="mb-4">
          <Span>
            ❮❯ by <LinkDeveloper to="/">Matheus Velloso</LinkDeveloper> - 2022{' '}
          </Span>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
