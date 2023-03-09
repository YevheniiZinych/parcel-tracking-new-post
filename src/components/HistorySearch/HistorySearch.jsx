import { useSelector } from 'react-redux';
import { getTtn } from 'redux/TtnSlice/selectors';
import { TtnItem } from 'components/TtnItem/TtnItem';

export const HistorySearch = ({ getCurrentTtn }) => {
  const { ttn } = useSelector(getTtn);

  return (
    <>
      <ul>
        {ttn.length > 0 &&
          ttn.map(({ id, number }) => {
            return (
              <>
                <li key={id}>
                  <TtnItem
                    getCurrentTtn={getCurrentTtn}
                    id={id}
                    number={number}
                  />
                </li>
              </>
            );
          })}
      </ul>
    </>
  );
};
