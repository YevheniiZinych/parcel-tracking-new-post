import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import toast from 'react-hot-toast';
import { getCurrentTracking } from 'redux/TrackingSlice/operation';
import { addTTN } from 'redux/TtnSlice/ttnSlice';
import { getTtn } from 'redux/TtnSlice/selectors';
import { getParcel } from 'redux/TrackingSlice/selectors';
import { Spinner } from 'components/Spinner/Spinner';
import { Container, Button } from './SearchForm.styled';

export const SearchForm = ({ currentTtn }) => {
  const [number, setNumber] = useState('');
  const { ttn } = useSelector(getTtn);
  const { isLoading } = useSelector(getParcel);
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

    if (uniqTTN.includes(number) || number === '') {
      return;
    } else {
      dispatch(addTTN({ number }));
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;

    if (isNaN(value)) {
      toast('Потрібно вводити тільки числа. Наприклад: 20450670565349');
    }

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
            label="Введіть номер накладної"
            id="outlined-error"
            type="text"
            name="text"
            inputProps={{ maxLength: 14, minLength: 14 }}
            value={number}
            onChange={handleChange}
          />
        </label>
        {isLoading ? <Spinner /> : <Button type="submit">Відстежити</Button>}
      </Container>
    </form>
  );
};
