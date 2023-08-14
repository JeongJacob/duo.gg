"use client";
import Image from "next/image";
import { useState } from "react";
import search from "@/app/styles/SearchInput.module.css";

export default function SearchInput() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={search.input__container}>
      <input
        className={search.input__element}
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="소환사명을 입력해주세요."
      />
      <Image
        className={search.search__icon}
        src="/Search_Icon.svg"
        width={15}
        height={15}
        alt="search"
      />
    </div>
  );
}
