import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { getCurrentTracking } from './operation';

const handlePending = state => {
  state.isLoading = true;
  state.success = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const trackingSlice = createSlice({
  name: 'parcel',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    success: false,
    ttn: [],
  },
  extraReducers: {
    [getCurrentTracking.pending]: handlePending,
    [getCurrentTracking.fulfilled](state, action) {
      const ttn = action.payload.ttn;
      state.isLoading = false;
      state.error = null;
      state.items = [{ ...action.payload }];
      state.ttn.push({ ttn, id: nanoid() });
    },
    [getCurrentTracking.rejected]: handleRejected,
  },
});

export const parcelReducer = trackingSlice.reducer;
