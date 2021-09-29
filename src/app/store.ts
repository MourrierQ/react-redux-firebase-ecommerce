import { configureStore, ThunkAction, Action, createReducer } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../features/cart/cartSlice';
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    auth: authReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
