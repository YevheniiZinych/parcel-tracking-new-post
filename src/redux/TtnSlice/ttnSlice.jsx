import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const TtnSlice = createSlice({
  name: 'ttn',
  initialState: {
    ttn: [],
  },
  reducers: {
    addTTN: {
      reducer(state, action) {
        state.ttn.push(action.payload);
      },
      prepare({ number }) {
        return {
          payload: {
            id: nanoid(),
            number,
          },
        };
      },
    },
    deleteTTN(state, action) {
      const index = state.ttn.findIndex(ttn => ttn.id === action.payload);
      state.ttn.splice(index, 1);
    },
  },
});

export const { addTTN, deleteTTN } = TtnSlice.actions;
export const TtnReducer = TtnSlice;
