"use client";
import userRecord from "@/app/styles/SearchUserRecord.module.css";
import { SetStateAction } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function SearchUserRecord({
  searchUserList,
  setSearchUserList,
}: {
  searchUserList: string[];
  setSearchUserList: React.Dispatch<SetStateAction<string[]>>;
}) {
  const deleteSearchUser = (
    e: React.MouseEvent<HTMLAllCollection>,
    idx: string
  ) => {
    e.preventDefault();
    setSearchUserList((user) => user.filter((el) => el !== idx));
  };
  return (
    <div className={userRecord.wrapper}>
      {searchUserList.map((user, idx) => (
        <ul className={userRecord.user__container} key={idx}>
          <li>{user}</li>
          <IoCloseOutline
            cursor="pointer"
            onClick={(e: React.MouseEvent<HTMLAllCollection>) =>
              deleteSearchUser(e, searchUserList[idx])
            }
          />
        </ul>
      ))}
    </div>
  );
}
