import { useSelector } from 'react-redux';
import { getTtn } from 'redux/TtnSlice/selectors';
import { TtnItem } from 'components/TtnItem/TtnItem';
import { Inner } from './HistorySearch.styled';

export const HistorySearch = ({ getCurrentTtn }) => {
  const { ttn } = useSelector(getTtn);

  return (
    <Inner>
      <h3
        style={{
          color: '#DC143C',
          textAlign: 'center',
          marginBottom: '10px',
        }}
      >
        Історія пошуку
      </h3>

      <ul>
        {ttn.length > 0 &&
          ttn.map(({ id, number }) => {
            return (
              <TtnItem getCurrentTtn={getCurrentTtn} id={id} number={number} />
            );
          })}
      </ul>
    </Inner>
  );
};
