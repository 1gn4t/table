import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';
import { api } from './api';

const store = configureStore({
  reducer: {
    counter: dataReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
