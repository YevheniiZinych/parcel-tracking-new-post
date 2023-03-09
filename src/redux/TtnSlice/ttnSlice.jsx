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
    // deleteTTN(state, action) {
    //   const index = state.contact.findIndex(
    //     contact => contact.id === action.payload
    //   );
    //   state.contact.splice(index, 1);
    // },
  },
});

export const { addTTN } = TtnSlice.actions;
export const TtnReducer = TtnSlice;
