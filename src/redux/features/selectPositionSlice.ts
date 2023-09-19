import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SelectPositionState {
  myPosition: string;
  yourPosition: string;
}

const initialState = {
  myPosition: "all",
  yourPosition: "all",
} as SelectPositionState;

export const selectPositionSlice = createSlice({
  name: "selectPosition",
  initialState,
  reducers: {
    handleSelectMyPosition(state, action: PayloadAction<string>) {
      state.myPosition = action.payload;
    },
    handleSelectYourPosition(state, action: PayloadAction<string>) {
      state.yourPosition = action.payload;
    },
  },
});

export const { handleSelectMyPosition, handleSelectYourPosition } =
  selectPositionSlice.actions;
export default selectPositionSlice.reducer;
