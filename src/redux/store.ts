import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userListSlice from "./features/userListSlice";
import { persistReducer, PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userLogSlice from "./features/userLogSlice";
import selectTabSlice from "./features/selectTabSlice";
import sessionStorage from "redux-persist/lib/storage/session";
import selectPositionSlice from "./features/selectPositionSlice";

// storage에 저장하기 위해 아래와 같이 persistConfig를 생성해야 한다.
const userListPersistConfig = {
  //obj의 key를 나타냄
  key: "userList",
  //storage의 타입을 나타냄(여기에선 localstorage)
  storage,
  // theme Reducer만 persist 적용하기 whitelist 외에도 blacklist 등 여러 option이 존재한다.
  whitelist: ["userList"],
};
const userLogPersistConfig = {
  //obj의 key를 나타냄
  key: "userLog",
  //storage의 타입을 나타냄(여기에선 localstorage)
  storage,
  // theme Reducer만 persist 적용하기 whitelist 외에도 blacklist 등 여러 option이 존재한다.
  whitelist: ["userLog"],
};

const tabPersistConfig = {
  key: "selectTab",
  storage: sessionStorage,
  whitelist: ["queueValue", "tierValue"],
};

// reducer를 여기에 추가하시면 됩니다
const rootReducer = combineReducers({
  userList: persistReducer(userListPersistConfig, userListSlice),
  userLog: persistReducer(userLogPersistConfig, userLogSlice),
  selectTab: persistReducer(tabPersistConfig, selectTabSlice),
  selectPositon: selectPositionSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
