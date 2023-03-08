import { createSlice } from '@reduxjs/toolkit';

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
  },
  extraReducers: {
    [getCurrentTracking.pending]: handlePending,
    [getCurrentTracking.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [getCurrentTracking.rejected]: handleRejected,
  },
});

export const parcelReducer = trackingSlice.reducer;
