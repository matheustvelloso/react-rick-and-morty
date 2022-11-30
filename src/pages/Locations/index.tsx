import { memo, useCallback, useEffect, useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import Banner from 'components/Banner';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Loader from 'components/Loader';
import LocationCard from 'components/LocationCard';
import Paginate from 'components/Paginate';

import useTitle from 'hooks/useTitle';

import { LocationType } from 'types/locationType';

const Locations: React.FC = () => {
  const [locations, setLocations] = useState<LocationType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const setTitle = useTitle();

  const fetchLocations = useCallback(async (page: number) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/location?page=${page}`,
    ).then((r) => r.json());

    setIsLoading(false);
    setLocations(response.results);
    setPages(response.info.pages);
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    fetchLocations(1);
    setTitle('Locations');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <main className="bg-dark pb-1">
        <Container>
          {isLoading && <Loader />}
          {!isLoading && (
            <>
              <Row className="row-cols-1 row-cols-md-2 py-5">
                {locations.map((location) => (
                  <Col className="p-3" key={location.id}>
                    <LocationCard location={location} />
                  </Col>
                ))}
              </Row>

              {pages > 1 && (
                <Paginate
                  onPageChange={({ selected }) => fetchLocations(selected + 1)}
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

export default memo(Locations);
