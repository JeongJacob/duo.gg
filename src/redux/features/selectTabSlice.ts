import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SelectTabState {
  queueValue: string;
  tierValue: string;
}

const initialState = {
  queueValue: "모든 큐",
  tierValue: "모든 티어",
} as SelectTabState;

export const selectTabSlice = createSlice({
  name: "selectTab",
  initialState,
  reducers: {
    handleSelectQueueTab(state, action: PayloadAction<string>) {
      state.queueValue = action.payload;
      console.log(state.queueValue);
    },
    handleSelectTierTab(state, action: PayloadAction<string>) {
      state.tierValue = action.payload;
    },
  },
});

export const { handleSelectQueueTab, handleSelectTierTab } =
  selectTabSlice.actions;
export default selectTabSlice.reducer;
