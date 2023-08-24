import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  userList: string[];
}

const initialState = {
  userList: [],
} as UserState;

export const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    addUserList(state, action: PayloadAction<string>) {
      state.userList = [...state.userList, action.payload];
    },
    delUserList(state, action: PayloadAction<string>) {
      state.userList = state.userList.filter((user) => user !== action.payload);
    },
  },
});

export const { addUserList, delUserList } = userListSlice.actions;
export default userListSlice.reducer;
