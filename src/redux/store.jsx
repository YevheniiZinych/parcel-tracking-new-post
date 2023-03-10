import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { parcelReducer } from './TrackingSlice/trackingSlice';
import { TtnReducer } from './TtnSlice/ttnSlice';

const persistConfig = {
  key: 'ttn',
  storage,
};
const persistedTtnReducer = persistReducer(persistConfig, TtnReducer.reducer);

export const store = configureStore({
  reducer: {
    parcel: parcelReducer,
    ttn: persistedTtnReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
