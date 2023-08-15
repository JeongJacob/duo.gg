"use client";
import userRecord from "@/app/styles/SearchUserRecord.module.css";
import { delUserList } from "@/redux/features/userListSlice";
import { RootState } from "@/redux/store";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

export default function SearchUserRecord() {
  const userList = useSelector((state: RootState) => state.userList.value);
  const dispatch = useDispatch();

  return (
    <div className={userRecord.wrapper}>
      {userList.map((user, idx) => (
        <ul className={userRecord.user__container} key={idx}>
          <li>{user}</li>
          <IoCloseOutline
            cursor="pointer"
            onClick={() => dispatch(delUserList(userList[idx]))}
          />
        </ul>
      ))}
    </div>
  );
}
