import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDrugs } from "../components/Api/Api";

export const requestDrugs = createAsyncThunk(
  "drugs/requestDrugs",
  async (_, thunkApi) => {
    try {
      const data = await fetchDrugs();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
