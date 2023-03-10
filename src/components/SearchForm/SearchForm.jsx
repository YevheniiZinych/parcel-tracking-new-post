import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentTracking } from 'redux/TrackingSlice/operation';
import { addTTN } from 'redux/TtnSlice/ttnSlice';

export const SearchForm = ({ currentTtn }) => {
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setNumber(currentTtn);
  }, [currentTtn]);

  const formSubmit = e => {
    e.preventDefault();

    dispatch(getCurrentTracking({ number }));
    dispatch(addTTN({ number }));

    setNumber('');
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
    <div>
      <form onSubmit={formSubmit}>
        <label>
          <input
            type="text"
            name="text"
            value={number}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Get status TTN</button>
      </form>
    </div>
  );
};
