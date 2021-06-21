import { configureStore } from "@reduxjs/toolkit";
import { MarketReducer } from "./redusers/MarketReducer";

export const store = configureStore({
  reducer: {
    market: MarketReducer,
  }
});


export type RootState = ReturnType<typeof store.getState>;