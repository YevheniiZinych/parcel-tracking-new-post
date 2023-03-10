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
  PostNumber,
  Address,
} from './OfficeSelect.styled';

const API_KEY = '28c234fe908d6729d7cc9731a29257d1';

const baseURL = 'https://api.novaposhta.ua/v2.0/json/';

export const OfficeSelect = () => {
  const [cityName, setCityName] = useState('');
  const [office, setOffice] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(false);

  const checkName = cityName === '' ? 'null' : cityName;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = {
    apiKey: API_KEY,
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityName: checkName,
      Page: `${currentPage}`,
      Limit: '25',
      Language: 'UA',
    },
  };

  useEffect(() => {
    if (!cityName) return;
    if (fetching) {
      axios
        .post(baseURL, options)
        .then(response => {
          setOffice([...office, ...response.data.data]);
          setCurrentPage(prevState => prevState + 1);
        })
        .catch(err => console.log(err))
        .finally(() => setFetching(false));
    }
  }, [fetching, cityName, office, options]);

  useEffect(() => {
    if (cityName) {
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
          <Typography variant="h4">?????????? ?????????????????? ???? ?????????? ????????????</Typography>
          <Wrapper>
            <label>
              <TextField
                error
                type="text"
                name="text"
                value={cityName}
                onChange={handleChange}
                id="standard-basic"
                label="?????????????? ???????? ??????????"
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
                    Ref,
                    Number,
                    ShortAddress,
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
                      <PostItem key={Ref}>
                        <WrapperPost>
                          <PostNumber> ???????? ??? {Number}</PostNumber>
                          <Address>{ShortAddress}</Address>

                          <TimeList>
                            <Box>
                              <li>????: {Monday} </li>
                              <li>????: {Tuesday}</li>
                              <li>????: {Wednesday}</li>
                              <li>????: {Thursday}</li>
                              <li>????: {Friday}</li>
                              <li>????: {Saturday}</li>
                              <li>????: {Sunday}</li>
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
