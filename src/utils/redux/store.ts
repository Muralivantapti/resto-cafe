import { configureStore } from "@reduxjs/toolkit";
// import FoodSlice from "./slice";
import CartSlice from "./CartSlice";

export const store = configureStore({
  reducer: {
    Food: CartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
