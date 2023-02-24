import { createSlice } from "@reduxjs/toolkit";
import { getCountryStatus } from "../services";

const initialState = {
  countriesDatas: {},
  countryStatus: {},
  loading: false,
  error: "",
};

export const countriesStore = createSlice({
  name: "countries",
  initialState,
  reducers: {
    getCountriesStatus(state, action) {
      state.countryStatus = getCountryStatus(action.payload);
    },
  },
});

export const { getCountriesStatus } = countriesStore.actions;

export default countriesStore.reducer;
