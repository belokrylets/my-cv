import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActivePageState {
  activePage: string;
}

const initialState: ActivePageState = {
  activePage: "main",
};

export const activePageSlice = createSlice({
  name: "activePage",
  initialState,
  reducers: {
    changeActivePage(state, action: PayloadAction<string>) {
      state.activePage = action.payload;
    },
  },
});

const activePageReducer = activePageSlice.reducer;
export default activePageReducer;
