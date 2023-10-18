"use client";
import InteractBtn from "../components/InteractBtn";
import Image from "next/image";
import { useState } from "react";
import SignUpModal from "./components/SignUpModal";
import styled from "styled-components";
import login from "@/app/styles/Login.module.css";

export const LoginInput = styled.input<{ $isValid?: boolean }>`
  width: 280px;
  height: 32px;
  padding-left: 5px;
  border: none;
  color: black;
  margin-top: 0.2rem;
  border-radius: 5px;
  outline: ${(props) =>
    props.$isValid ? "1px solid #c12828" : "1px solid #25ae25"};
`;
export const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  color: white;
`;
export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <>
      {isSignup && <SignUpModal setIsSignUp={setIsSignup} />}
      <div className={login.wrapper}>
        <div className={login.container}>
          <div className={login.logo__container}>
            <Image
              src={"/Logo_White.png"}
              width={200}
              height={50}
              alt="duo.gg"
            />
          </div>
          <LoginDiv>
            <span>이메일</span>
            <LoginInput type="email" placeholder="jacob@duo.gg" />
          </LoginDiv>
          <LoginDiv>
            <span>비밀번호</span>
            <LoginInput type="password" />
          </LoginDiv>
          <div className={login.btn__container}>
            <InteractBtn width="100px" text="로그인" />
          </div>
          <span className={login.signup__element}>
            아직 Duo.gg의 회원이 아니신가요?&nbsp;
            <button onClick={() => setIsSignup(true)}>회원가입</button>
          </span>
        </div>
      </div>
    </>
  );
}
