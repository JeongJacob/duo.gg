"use client";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useSelector } from "react-redux";
import header from "@/app/styles/Header.module.css";

export default function Header() {
  const isLogin = useSelector(
    (state: RootState) => state.userLog.userLog.isLogin
  );
  return (
    <header className={header.wrapper}>
      <div className={header.container}>
        <Link href={"/duo/lol"}>듀오찾기</Link>
        {isLogin ? (
          <Link href={"/login"}>로그인</Link>
        ) : (
          <>
            <Link href={"/mypage"}>마이페이지</Link>
            <span>로그아웃</span>
          </>
        )}
      </div>
    </header>
  );
}
