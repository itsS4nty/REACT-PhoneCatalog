import { createSlice } from '@reduxjs/toolkit'

export const newManufacturerReducer = createSlice({
  name: 'newManufacturer',
  initialState: {
    change_variable: false,
  },
  reducers: {
    updateVariable: (state, action) => {
      state.change_variable = !state.change_variable;
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateVariable } = newManufacturerReducer.actions;

export const change_variable = (state) => state.newManufacturer.change_variable;

export default newManufacturerReducer.reducer;