import { memo, useCallback, useEffect, useState } from 'react';

import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import Banner from 'components/Banner';
import CharCard from 'components/CharCard';
import Footer from 'components/Footer';
import Header from 'components/Header';

import useTitle from 'hooks/useTitle';

import { CharType } from 'types/charType';

const Character: React.FC = () => {
  const [character, setCharacter] = useState<CharType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const setTitle = useTitle();

  const { id } = useParams();

  const fetchCharacter = useCallback(async (charId: number) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${charId}`,
    ).then((r) => r.json());
    setIsLoading(false);
    setCharacter(response);
  }, []);

  useEffect(() => {
    fetchCharacter(Number(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setTitle(character?.name);
  }, [character?.name, setTitle]);

  return (
    <>
      <Header />
      <Banner />
      <main className="bg-dark pb-1">
        <Container>
          {isLoading && (
            <div className="text-center my-3">
              <Spinner animation="grow" variant="warning" />
            </div>
          )}
          {!isLoading && character && (
            <Row>
              <Col className="my-5 d-flex justify-content-center">
                <CharCard char={character} />
              </Col>
            </Row>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default memo(Character);
