import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://post-office-ixqj.onrender.com/api/invoices';

export const getCurrentTracking = createAsyncThunk(
  'parcel/fetchAll',
  async (data, thunkAPI) => {
    const ttn = data.number;

    const options = {
      number: ttn,
    };
    try {
      const { data } = await axios.post(baseURL, options);

      const { Status, WarehouseRecipient, WarehouseSender, _id } = data[0];

      return { Status, WarehouseRecipient, WarehouseSender, ttn, _id };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
