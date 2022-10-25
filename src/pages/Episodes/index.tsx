import { memo, useCallback, useEffect, useState } from 'react';

import { Col, Container, Row, Spinner } from 'react-bootstrap';

import Banner from 'components/Banner';
import EpisodeCard from 'components/EpisodeCard';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Paginate from 'components/Paginate';

import useTitle from 'hooks/useTitle';

import { EpisodeType } from 'types/episodeType';

const Episodes: React.FC = () => {
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const setTitle = useTitle();

  const fetchEpisodes = useCallback(async (page: number) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode?page=${page}`,
    ).then((r) => r.json());

    setIsLoading(false);
    setEpisodes(response.results);
    setPages(response.info.pages);
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    fetchEpisodes(1);
    setTitle('Episodes');
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
              <Row className="row-cols-1 row-cols-md-2 py-5">
                {episodes.map((episode) => (
                  <Col className="p-3" key={episode.id}>
                    <EpisodeCard episode={episode} />
                  </Col>
                ))}
              </Row>

              {pages > 1 && (
                <Paginate
                  onPageChange={({ selected }) => fetchEpisodes(selected + 1)}
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

export default memo(Episodes);
