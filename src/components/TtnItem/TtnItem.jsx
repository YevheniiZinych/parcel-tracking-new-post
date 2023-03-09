import { useDispatch } from 'react-redux';
import { getCurrentTracking } from 'redux/TrackingSlice/operation';
import { deleteTTN } from 'redux/TtnSlice/ttnSlice';

export const TtnItem = ({ id, number }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div onClick={() => dispatch(getCurrentTracking({ number }))}>
        {number}
      </div>
      <button type="button" onClick={() => dispatch(deleteTTN(id))}>
        DELETE
      </button>
    </div>
  );
};
