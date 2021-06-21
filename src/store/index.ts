import { configureStore } from "@reduxjs/toolkit";
import { MarketReducer } from "./redusers/MarketReducer";

// создание хранилища redux
export const store = configureStore({
  reducer: {
    market: MarketReducer,
  }
});


// тип для создания кастомного хука получения стейта с типизацией
export type RootState = ReturnType<typeof store.getState>;