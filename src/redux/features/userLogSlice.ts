import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserLogState {
  userLog: T;
}

interface T {
  isLogin: boolean;
  nickname: string;
  tier: string;
  voice: boolean;
}
const initialState = {
  userLog: {
    isLogin: false,
    nickname: "",
    tier: "",
    voice: false,
  },
} as UserLogState;

export const userLogSlice = createSlice({
  name: "userLog",
  initialState,
  reducers: {
    LoginReducer(state, action: PayloadAction<T>) {
      const { isLogin, nickname, tier, voice } = action.payload;
      state.userLog.isLogin = isLogin;
      state.userLog.nickname = nickname;
      state.userLog.tier = tier;
      state.userLog.voice = voice;
    },
    LogOutReducer(state) {
      state.userLog = {
        isLogin: false,
        nickname: "",
        tier: "",
        voice: false,
      };
    },
  },
});

export const { LoginReducer, LogOutReducer } = userLogSlice.actions;
export default userLogSlice.reducer;
