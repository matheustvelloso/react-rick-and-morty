import { memo, useCallback, useEffect, useState } from 'react';

import { Col, Container, Row, Spinner } from 'react-bootstrap';

import Banner from 'components/Banner';
import CharacterCard from 'components/CharacterCard';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Paginate from 'components/Paginate';

import useTitle from 'hooks/useTitle';

import { CharacterType } from 'types/characterType';

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const setTitle = useTitle();

  const fetchCharacters = useCallback(async (page: number) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`,
    ).then((r) => r.json());

    setIsLoading(false);
    setCharacters(response.results);
    setPages(response.info.pages);
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    fetchCharacters(1);
    setTitle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          {!isLoading && (
            <>
              <Row className="row-cols-1 row-cols-sm-2 py-5">
                {characters.map((character) => (
                  <Col className="p-3" key={character.id}>
                    <CharacterCard character={character} />
                  </Col>
                ))}
              </Row>

              {pages > 1 && (
                <Paginate
                  onPageChange={({ selected }) => fetchCharacters(selected + 1)}
                  pageCount={pages}
                  forcePage={currentPage - 1}
                />
              )}
            </>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default memo(Home);
