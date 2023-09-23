import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface PositionT {
  position: string;
  num: number;
}

interface SelectPositionState {
  positionSelected: PositionT;
  myPosition: string;
  yourPosition: string;
}

const initialState = {
  positionSelected: {
    position: "all",
    num: 0,
  },
  myPosition: "all",
  yourPosition: "all",
} as SelectPositionState;

export const selectPositionSlice = createSlice({
  name: "selectPosition",
  initialState,
  reducers: {
    handleSelectPosition(state, action: PayloadAction<PositionT>) {
      state.positionSelected = action.payload;
    },
    handleSelectMyPosition(state, action: PayloadAction<string>) {
      state.myPosition = action.payload;
    },
    handleSelectYourPosition(state, action: PayloadAction<string>) {
      state.yourPosition = action.payload;
    },
  },
});

export const {
  handleSelectPosition,
  handleSelectMyPosition,
  handleSelectYourPosition,
} = selectPositionSlice.actions;
export default selectPositionSlice.reducer;
