import { async } from 'q';
import { useDispatch } from 'react-redux';
import { getCurrentTracking } from 'redux/TrackingSlice/operation';
import { deleteTTN } from 'redux/TtnSlice/ttnSlice';

export const TtnItem = ({ id, number, getCurrentTtn }) => {
  const dispatch = useDispatch();

  const doubleFunction = number => {
    dispatch(getCurrentTracking({ number }));
    getCurrentTtn(number);
  };
  return (
    <div>
      <div
        onClick={() => {
          dispatch(getCurrentTracking({ number }));
          getCurrentTtn(number);
        }}
      >
        {number}
      </div>
      <button type="button" onClick={() => dispatch(deleteTTN(id))}>
        DELETE
      </button>
    </div>
  );
};
