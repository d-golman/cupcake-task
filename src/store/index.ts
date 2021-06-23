import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { MarketReducer } from "./redusers/MarketReducer";

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

// создание хранилища redux
export const store = configureStore(
  {

    reducer: {
      market: MarketReducer,
    },
    middleware,
  });


// тип для создания кастомного хука получения стейта с типизацией
export type RootState = ReturnType<typeof store.getState>;