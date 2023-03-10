import axios from 'axios';
import { useState, useEffect } from 'react';

const API_KEY = '28c234fe908d6729d7cc9731a29257d1';

const baseURL = 'https://api.novaposhta.ua/v2.0/json/';

export const OfficeSelect = () => {
  const [cityName, setCityName] = useState('');
  const [office, setOffice] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(false);

  const checkName = cityName === '' ? 'null' : cityName;

  const options = {
    apiKey: API_KEY,
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityName: checkName,
      Page: `${currentPage}`,
      Limit: '50',
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
  }, [fetching, cityName, office]);

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
    <>
      <div>
        <label>
          <p>City: {cityName}</p>
          <input
            type="text"
            name="text"
            value={cityName}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <ul>
          {office?.length > 0 &&
            office.map(({ Description, Ref }) => {
              return <li key={Ref}> {Description} </li>;
            })}
        </ul>
      </div>
    </>
  );
};
