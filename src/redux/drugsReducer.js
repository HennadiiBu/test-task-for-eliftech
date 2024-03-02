import { createSlice } from "@reduxjs/toolkit";
import { requestDrugs } from "./operations";

const initialState = {
  drugs: [],
  filteredData: null,
  isLoading: false,
  error: null,
};

const drugsSlice = createSlice({
  name: "drugs",
  initialState: initialState,
  reducers: {
    applyFilter: (state, { payload }) => {
      state.filteredData = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(requestDrugs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestDrugs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.drugs = action.payload;
      })
      .addCase(requestDrugs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});
export const { applyFilter } = drugsSlice.actions;
export const drugsReducer = drugsSlice.reducer;
