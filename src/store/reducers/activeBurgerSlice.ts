import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActiveBurgerState {
  isActive: boolean;
}

const initialState: ActiveBurgerState = {
  isActive: false,
};

export const activeBurgerSlice = createSlice({
  name: "activeBurgerSlice",
  initialState,
  reducers: {
    changeActiveBurger(state, action: PayloadAction<boolean>) {
      state.isActive = action.payload;
    },
  },
});

const activeBurgerReducer = activeBurgerSlice.reducer;
export default activeBurgerReducer;
