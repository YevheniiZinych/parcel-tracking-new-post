import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import { getCurrentTracking } from 'redux/TrackingSlice/operation';
import { addTTN } from 'redux/TtnSlice/ttnSlice';
import { getTtn } from 'redux/TtnSlice/selectors';
import { Container, Button } from './SearchForm.styled';

export const SearchForm = ({ currentTtn }) => {
  const [number, setNumber] = useState('');
  const { ttn } = useSelector(getTtn);
  const dispatch = useDispatch();

  const uniqTTN = ttn.reduce((acc, item) => {
    acc.push(item.number);

    return acc;
  }, []);

  useEffect(() => {
    setNumber(currentTtn);
  }, [currentTtn]);

  const formSubmit = e => {
    e.preventDefault();

    dispatch(getCurrentTracking({ number }));

    setNumber('');

    if (uniqTTN.includes(number)) {
      return;
    } else {
      dispatch(addTTN({ number }));
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'text':
        setNumber(value);
        break;

      default:
        return null;
    }
  };

  return (
    <form onSubmit={formSubmit}>
      <Container>
        <label>
          <b>Введіть номер накладної</b>
          <br />
          <TextField
            sx={{
              width: '270px',
              height: '55px',
              marginRight: '15px',
              backgroundColor: 'white',
              borderRadius: '3px',
            }}
            error
            id="outlined-error"
            type="text"
            name="text"
            value={number}
            onChange={handleChange}
          />
        </label>

        <Button type="submit">Відстежити</Button>
      </Container>
    </form>
  );
};
