import { memo, useCallback, useEffect, useState } from 'react';

import { Col, Container, Pagination, Row, Spinner } from 'react-bootstrap';

import Banner from 'components/Banner';
import EpisodeCard from 'components/EpisodeCard';
import Footer from 'components/Footer';
import Header from 'components/Header';

import { EpisodeType } from 'types/episodeType';

const Episodes: React.FC = () => {
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCharachters = useCallback(async (page: number) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode?page=${page}`,
    ).then((r) => r.json());

    setIsLoading(false);
    setEpisodes(response.results);
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
              <Row className="row-cols-1 row-cols-md-2 py-5">
                {episodes.map((episode) => (
                  <Col className="p-3" key={episode.id}>
                    <EpisodeCard episode={episode} />
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

export default memo(Episodes);
