"use client";
import Image from "next/image";
import { useState } from "react";
import search from "@/app/styles/SearchInput.module.css";
import SearchUserRecord from "./SearchUserRecord";

export default function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  const [onUserModal, setOnUserModal] = useState(false);

  return (
    <div>
      <div className={search.input__container}>
        <input
          className={search.input__element}
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="소환사명을 입력해주세요."
          onClick={() => setOnUserModal(true)}
        />
        <Image
          className={search.search__icon}
          src="/Search_Icon.svg"
          width={15}
          height={15}
          alt="search"
        />
      </div>
      <SearchUserRecord />
    </div>
  );
}
