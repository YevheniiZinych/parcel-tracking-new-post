import axios from 'axios';
import { useState, useEffect } from 'react';
import { Typography, TextField } from '@mui/material';
import { OfficeList } from 'components/OfficeList/OfficeList';
import { Container, Section, Wrapper } from './OfficeSelect.styled';
import { Spinner } from 'components/Spinner/Spinner';

const limit = 15;

export const OfficeSelect = () => {
  const [cityName, setCityName] = useState('');
  const [office, setOffice] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const checkName = cityName === '' ? 'null' : cityName;

  useEffect(() => {
    if (!cityName) return;
    if (fetching) {
      const options = {
        city: checkName,
      };
      setIsLoading(true);
      axios
        .post(
          `https://post-office-ixqj.onrender.com/api/offices?page=${currentPage}&limit=${limit}`,
          options
        )
        .then(response => {
          setIsLoading(false);
          setOffice([...office, ...response.data]);
          setCurrentPage(prevState => prevState + 1);
        })
        .catch(err => console.log(err))
        .finally(() => {
          setFetching(false);
          setIsLoading(false);
        });
    }
  }, [fetching, cityName, office, currentPage, checkName]);

  useEffect(() => {
    if (cityName === '') {
      setFetching(true);
      setCurrentPage(1);
      setOffice([]);
      setIsLoading(false);
    }
  }, [cityName]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return function () {
      document.addEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = e => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  const handleChange = e => {
    const { value } = e.target;
    if (value === cityName) setFetching(true);
    setCityName(value);
  };

  return (
    <Container>
      <main>
        <Section>
          <Typography variant="h4">Пошук відділень за Вашим містом</Typography>
          <Wrapper>
            <label>
              <TextField
                error
                type="text"
                name="text"
                value={cityName}
                onChange={handleChange}
                id="standard-basic"
                label="Введіть ваше місто"
                variant="standard"
              />
            </label>
          </Wrapper>
          <Wrapper>
            <ul>
              {isLoading && <Spinner />}
              <OfficeList office={office} />
            </ul>
          </Wrapper>
        </Section>
      </main>
    </Container>
  );
};
