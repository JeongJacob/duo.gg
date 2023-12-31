"use client";
import Image from "next/image";
import { useState } from "react";
import SearchUserRecord from "./SearchUserRecord";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addUserList } from "@/redux/features/userListSlice";
import search from "@/app/styles/SearchInput.module.css";

export default function SearchInput() {
  const [searchUser, setSearchUser] = useState("");
  const [onUserModal, setOnUserModal] = useState(false);
  const userList = useSelector((state: RootState) => state.userList.userList);
  const dispatch = useDispatch();

  const onKeySearchUser = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setSearchUser("");
      setOnUserModal(false);
    }
    if (e.key === "Enter") {
      if (!userList.includes(searchUser) && searchUser.trim() !== "") {
        dispatch(addUserList(searchUser.trim()));
      }
      setSearchUser("");
      setOnUserModal(false);
    }
  };

  const handleSearchUser = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    if (!userList.includes(searchUser) && searchUser.trim() !== "") {
      dispatch(addUserList(searchUser.trim()));
    }
    setSearchUser("");
    setOnUserModal(false);
  };
  return (
    <div>
      <div className={search.input__container}>
        <input
          className={search.input__element}
          type="text"
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
          placeholder="소환사명을 입력해주세요."
          onKeyUp={onKeySearchUser}
          onClick={() => setOnUserModal(true)}
        />
        <Image
          className={search.search__icon}
          src="/Search_Icon.svg"
          width={15}
          height={15}
          alt="search"
          onClick={handleSearchUser}
        />
      </div>
      <div>
        {onUserModal && userList && (
          <SearchUserRecord
            setSearchUser={setSearchUser}
            setOnUserModal={setOnUserModal}
          />
        )}
      </div>
    </div>
  );
}
