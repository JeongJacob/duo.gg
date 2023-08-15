import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userListSlice from "./features/userListSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducer를 여기에 추가하시면 됩니다
const rootReducer = combineReducers({
  userList: userListSlice,
});
// storage에 저장하기 위해 아래와 같이 persistConfig를 생성해야 한다.
const persistConfig = {
  //obj의 key를 나타냄
  key: "userList",
  //storage의 타입을 나타냄(여기에선 localstorage)
  storage,
  // theme Reducer만 persist 적용하기 whitelist 외에도 blacklist 등 여러 option이 존재한다.
  whitelist: ["userList"],
};

//enhanced된 reducer를 반환한다.(redux-persist+redux 모듈을 종합하여 persist를 반환)
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
