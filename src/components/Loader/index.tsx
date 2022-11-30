import { memo } from 'react';

import { Container } from 'react-bootstrap';

import Loading from 'assets/loading.gif';

const Loader: React.FC = () => {
  return (
    <Container>
      <div className="d-flex justify-content-center py-5">
        <img className="py-5" src={Loading} alt="Loading" />
      </div>
    </Container>
  );
};

export default memo(Loader);
