"use client";
import userRecord from "@/app/styles/SearchUserRecord.module.css";
import { IoCloseOutline } from "react-icons/io5";

export default function SearchUserRecord() {
  return (
    <div className={userRecord.wrapper}>
      <ul className={userRecord.user__container}>
        <li>안녕하세요</li>
        <IoCloseOutline cursor="pointer" />
      </ul>
    </div>
  );
}
