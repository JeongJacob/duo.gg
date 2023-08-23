import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SelectTabState {
  queueValue: {
    value: string;
    label: string;
  };
  tierValue: {
    value: string;
    label: string;
  };
}

const initialState = {
  queueValue: { value: "모든 큐", label: "모든 큐" },
  tierValue: { value: "모든 큐", label: "모든 큐" },
} as SelectTabState;

export const selectTabSlice = createSlice({
  name: "selectTab",
  initialState,
  reducers: {
    handleSelectQueueTab(state, action: PayloadAction<string>) {
      state.queueValue.value = action.payload;
      state.queueValue.label = action.payload;
    },
    handleSelectTierTab(state, action: PayloadAction<string>) {
      state.tierValue.value = action.payload;
      state.tierValue.label = action.payload;
    },
  },
});

export const { handleSelectQueueTab, handleSelectTierTab } =
  selectTabSlice.actions;
export default selectTabSlice.reducer;
