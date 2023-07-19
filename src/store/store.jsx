import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';

const store = configureStore({

  reducer: {
    // Here we will be adding reducers.
    users: usersReducer,
  },
});

export default store;