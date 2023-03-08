import { useEffect } from 'react';
import { getCurrentTracking } from 'redux/TrackingSlice/operation';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentTracking());
  }, [dispatch]);

  return (
    <div>
      <></>
    </div>
  );
};
