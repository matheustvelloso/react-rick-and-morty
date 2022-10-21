import { memo } from 'react';

import { LocationType } from 'types/locationType';

import {
  Dimension,
  Div,
  H2,
  H3,
  H4D,
  H4R,
  Name,
  Planet,
  Residents,
} from './styles';

interface ILocationCardProps {
  location: LocationType;
}

const LocationCard: React.FC<ILocationCardProps> = ({ location }) => {
  return (
    <Div className="text-white p-4">
      <div className="my-3">
        <H2>
          <Name>Name:</Name> {location.name}
        </H2>
      </div>
      <div className="my-3">
        <H3>
          <Planet>Planet:</Planet> {location.type}
        </H3>
      </div>
      <div className="my-3">
        <H4D>
          <Dimension>Dimension:</Dimension> {location.dimension}
        </H4D>
      </div>
      <div className="my-3">
        <H4R>
          <Residents>Residents:</Residents> {location.residents.length}
        </H4R>
      </div>
    </Div>
  );
};

export default memo(LocationCard);
