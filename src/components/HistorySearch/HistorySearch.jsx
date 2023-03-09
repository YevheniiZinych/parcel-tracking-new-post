import { useSelector } from 'react-redux';
import { getTtn } from 'redux/TtnSlice/selectors';
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
                <li key={id}>{number}</li>
              </>
            );
          })}
      </ul>
    </>
  );
};
