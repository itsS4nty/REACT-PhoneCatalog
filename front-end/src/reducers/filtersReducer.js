import { createSlice } from '@reduxjs/toolkit'

export const filtersReducer = createSlice({
  name: 'filters',
  initialState: {
    manufacturers: [],
    minPrice: 0,
    maxPrice: 1000,
    storage: 8,
  },
  reducers: {
    updateManufacturers: (state, action) => {
      if(!state.manufacturers.includes(action.payload)) state.manufacturers.push(action.payload);
      else {
        let index = state.manufacturers.indexOf(action.payload);
        state.manufacturers.splice(index, 1);
      }
    },
    updateMinPriceRange: (state, action) => {
      state.minPrice = action.payload;
    },
    updateMaxPriceRange: (state, action) => {
      state.maxPrice = action.payload;
    },
    updateStorage: (state, action) => {
      state.storage = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateManufacturers, updateMinPriceRange, updateMaxPriceRange, updateStorage } = filtersReducer.actions;

export const manufacturers = (state) => state.filters.manufacturers;
export const minPrice = (state) => state.filters.minPrice;
export const maxPrice = (state) => state.filters.maxPrice;
export const storage = (state) => state.filters.storage;

export default filtersReducer.reducer;