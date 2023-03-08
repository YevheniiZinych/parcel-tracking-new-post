import { configureStore } from '@reduxjs/toolkit';

import { parcelReducer } from './TrackingSlice/trackingSlice';

export const store = configureStore({
  reducer: {
    parcel: parcelReducer,
  },
});
