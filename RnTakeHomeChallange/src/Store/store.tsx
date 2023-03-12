import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    carts: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
