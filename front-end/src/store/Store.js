import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from '../reducers/filtersReducer';
import newManufacturerReducer from '../reducers/newManufacturerReducer';


export default configureStore({
  reducer: {
    filters: filtersReducer,
    newManufacturer: newManufacturerReducer,
  },
});