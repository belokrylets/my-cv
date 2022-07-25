import { combineReducers, configureStore } from "@reduxjs/toolkit";
import activeBurgerReducer from "./reducers/activeBurgerSlice";
import activePageReducer from "./reducers/activePageSlice";

const rootReducer = combineReducers({
  activePageReducer,
  activeBurgerReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
