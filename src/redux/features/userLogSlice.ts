import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserLogState {
  value: T;
}

interface T {
  isLogin: boolean;
  nickname: string;
  tier: string;
  voice: boolean;
}
const initialState = {
  value: {
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
      state.value.isLogin = isLogin;
      state.value.nickname = nickname;
      state.value.tier = tier;
      state.value.voice = voice;
    },
    LogOutReducer(state) {
      state.value = {
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
