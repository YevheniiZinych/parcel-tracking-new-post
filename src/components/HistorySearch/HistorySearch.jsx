import { useSelector } from 'react-redux';
import { getTtn } from 'redux/TtnSlice/selectors';
import { TtnItem } from 'components/TtnItem/TtnItem';
export const HistorySearch = () => {
  const { ttn } = useSelector(getTtn);
  console.log(ttn);

  return (
    <>
      <ul>
        {ttn.length > 0 &&
          ttn.map(({ id, number }) => {
            return (
              <>
                <li key={id}>
                  <TtnItem id={id} number={number} />
                </li>
              </>
            );
          })}
      </ul>
    </>
  );
};
