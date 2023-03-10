import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '28c234fe908d6729d7cc9731a29257d1';

const baseURL = 'https://api.novaposhta.ua/v2.0/json/';

export const getCurrentTracking = createAsyncThunk(
  'parcel/fetchAll',
  async (data, thunkAPI) => {
    const ttn = data.number;

    const options = {
      apiKey: API_KEY,
      modelName: 'TrackingDocument',
      calledMethod: 'getStatusDocuments',
      methodProperties: {
        Documents: [
          {
            DocumentNumber: ttn,
          },
        ],
      },
    };
    try {
      const { data } = await axios.post(baseURL, options);

      const { Status, WarehouseRecipient, WarehouseSender } = data.data[0];

      return { Status, WarehouseRecipient, WarehouseSender, ttn };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
