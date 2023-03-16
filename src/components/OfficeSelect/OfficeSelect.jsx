import axios from 'axios';
import { useState, useEffect } from 'react';
import { Typography, TextField } from '@mui/material';
import {
  Container,
  Section,
  Wrapper,
  WrapperPost,
  TimeList,
  PostItem,
  Box,
  Address,
} from './OfficeSelect.styled';

const limit = 15;

export const OfficeSelect = () => {
  const [cityName, setCityName] = useState('');
  const [office, setOffice] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(false);

  const checkName = cityName === '' ? 'null' : cityName;

  const options = {
    city: checkName,
  };

  useEffect(() => {
    if (!cityName) return;
    if (fetching) {
      axios
        .post(
          `https://post-office-ixqj.onrender.com/api/offices?page=${currentPage}&limit=${limit}`,
          options
        )
        .then(response => {
          setOffice([...office, ...response.data]);

          setCurrentPage(prevState => prevState + 1);
        })
        .catch(err => console.log(err))
        .finally(() => setFetching(false));
    }
  }, [fetching, cityName, office, options, currentPage]);

  useEffect(() => {
    if (cityName === '') {
      setFetching(true);
      setCurrentPage(1);
      setOffice([]);
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
                sx={{}}
              />
            </label>
          </Wrapper>
          <Wrapper>
            <ul>
              {office?.length > 0 &&
                office.map(
                  ({
                    Number,
                    Description,
                    Reception: {
                      Monday,
                      Saturday,
                      Sunday,
                      Thursday,
                      Tuesday,
                      Wednesday,
                      Friday,
                    },
                  }) => {
                    return (
                      <PostItem key={Number}>
                        <WrapperPost>
                          <Address>{Description}</Address>

                          <TimeList>
                            <Box>
                              <li>Пн: {Monday} </li>
                              <li>Вт: {Tuesday}</li>
                              <li>Ср: {Wednesday}</li>
                              <li>Чт: {Thursday}</li>
                              <li>Пт: {Friday}</li>
                              <li>Сб: {Saturday}</li>
                              <li>Нд: {Sunday}</li>
                            </Box>
                          </TimeList>
                        </WrapperPost>
                      </PostItem>
                    );
                  }
                )}
            </ul>
          </Wrapper>
        </Section>
      </main>
    </Container>
  );
};
