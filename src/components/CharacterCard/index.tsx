import { memo } from 'react';

import { CharacterType } from 'types/characterType';

import { Div, LinkCharacter, Verify } from './styles';

interface ICharacterCardProps {
  character: CharacterType;
}

const CharacterCard: React.FC<ICharacterCardProps> = ({ character }) => {
  return (
    <Div className="d-lg-flex d-block">
      <div>
        <img className="img-fluid" src={character.image} alt={character.name} />
      </div>
      <div className="text-start">
        <div className="m-3">
          <LinkCharacter to={`/character/${character.id}`}>
            <h2>{character.name}</h2>
          </LinkCharacter>

          <span className="d-flex">
            <Verify status={character.status} />
            {character.status} - {character.species}
          </span>
        </div>
        <div className="m-3">
          <span>Last Known Location:</span>
          <p>{character.location.name}</p>
        </div>
        <div className="m-3">
          <span>Origin:</span>
          <p>{character.origin.name}</p>
        </div>
      </div>
    </Div>
  );
};

export default memo(CharacterCard);
