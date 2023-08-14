"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import search from "@/app/styles/SearchInput.module.css";
import SearchUserRecord from "./SearchUserRecord";

export default function SearchInput() {
  const [searchUser, setSearchUser] = useState("");
  const [searchUserList, setSearchUserList] = useState<string[]>([]);
  const [onUserModal, setOnUserModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(searchUserList));
  }, [searchUserList]);

  const onKeySearchUser = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setSearchUser("");
      setOnUserModal(false);
    }
    if (e.key === "Enter" && searchUser) {
      if (!searchUserList.includes(searchUser)) {
        setSearchUserList([...searchUserList, searchUser.trim()]);
      }
      localStorage.setItem("user", JSON.stringify(searchUserList));
      setSearchUser("");
      setOnUserModal(false);
    }
  };

  const handleSearchUser = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    if (!searchUserList.includes(searchUser)) {
      setSearchUserList([...searchUserList, searchUser.trim()]);
    }
    localStorage.setItem("user", JSON.stringify(searchUserList));
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
      <SearchUserRecord />
    </div>
  );
}
