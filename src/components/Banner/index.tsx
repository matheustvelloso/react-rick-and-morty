import { memo } from 'react';

import { Div, H1 } from './styles';

const Banner: React.FC = () => {
  return (
    <Div>
      <H1>Rick And Morty</H1>
    </Div>
  );
};

export default memo(Banner);
