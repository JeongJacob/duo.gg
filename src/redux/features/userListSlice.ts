import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  value: string[];
}

const initialState = {
  value: [],
} as UserState;

export const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    addUserList(state, action: PayloadAction<string>) {
      state.value = [...state.value, action.payload];
    },
    delUserList(state, action: PayloadAction<string>) {
      state.value = state.value.filter((user) => user !== action.payload);
    },
  },
});

export const { addUserList, delUserList } = userListSlice.actions;
export default userListSlice.reducer;
