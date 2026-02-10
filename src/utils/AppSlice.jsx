import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from '../utils/projectsSlice';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
