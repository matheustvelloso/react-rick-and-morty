import { memo } from 'react';

import { EpisodeType } from 'types/episodeType';

import {
  AirDate,
  Characters,
  Div,
  Episode,
  H2,
  H3,
  H4AD,
  H4C,
  Name,
} from './styles';

interface IEpisodeCardProps {
  episode: EpisodeType;
}

const LocationCard: React.FC<IEpisodeCardProps> = ({ episode }) => {
  return (
    <Div className="text-white p-4">
      <div className="my-3">
        <H2>
          <Name>Name:</Name> {episode.name}
        </H2>
      </div>
      <div className="my-3">
        <H3>
          <Episode>Episode:</Episode> {episode.episode}
        </H3>
      </div>
      <div className="my-3">
        <H4C>
          <Characters>Characters:</Characters> {episode.characters.length}
        </H4C>
      </div>
      <div className="my-3">
        <H4AD>
          <AirDate>Air Date:</AirDate> {episode.air_date}
        </H4AD>
      </div>
    </Div>
  );
};

export default memo(LocationCard);
