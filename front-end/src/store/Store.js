import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from '../reducers/filtersReducer';


export default configureStore({
  reducer: {
    filters: filtersReducer,
  },
});