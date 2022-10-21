import { memo, useCallback, useEffect, useState } from 'react';

import { Col, Container, Pagination, Row, Spinner } from 'react-bootstrap';

import Banner from 'components/Banner';
import CharacterCard from 'components/CharacterCard';
import Footer from 'components/Footer';
import Header from 'components/Header';

import { CharacterType } from 'types/characterType';

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCharachters = useCallback(async (page: number) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`,
    ).then((r) => r.json());

    setIsLoading(false);
    setCharacters(response.results);
    setPages(response.info.pages);
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    fetchCharachters(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = useCallback(
    (page: number) => {
      fetchCharachters(page);
    },
    [fetchCharachters],
  );

  return (
    <>
      <Header />
      <Banner />
      <main className="bg-dark pb-1">
        <Container>
          {isLoading && (
            <div className="text-center">
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
                <Pagination className="justify-content-center py-4 mb-5 flex-wrap">
                  {Array(pages)
                    .fill(null)
                    .map((_, index) => (
                      <Pagination.Item
                        key={index} // eslint-disable-line react/no-array-index-key
                        active={currentPage === index + 1}
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </Pagination.Item>
                    ))}
                </Pagination>
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
