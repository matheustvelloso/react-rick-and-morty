import { memo } from 'react';

import { CharType } from 'types/charType';

import { Div, Verify } from './styles';

interface ICharCardProps {
  char: CharType;
}

const CharacterCard: React.FC<ICharCardProps> = ({ char }) => {
  return (
    <Div key={char.id} className="p-5">
      <div>
        <img className="img-fluid" src={char.image} alt={char.name} />
      </div>
      <div className="text-start">
        <div className="m-3">
          <h2>{char.name}</h2>
          <span className="d-flex">
            <Verify status={char.status} />
            {char.status} - {char.species}
          </span>
        </div>
        <div className="m-3">
          <span>Gender:</span>
          <p>{char.gender}</p>
        </div>
        <div className="m-3">
          <span>Episodes Participation:</span>
          <p>{char.episode.length}</p>
        </div>
      </div>
    </Div>
  );
};

export default memo(CharacterCard);
