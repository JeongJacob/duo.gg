"use client";
import { LoginDiv, LoginInput } from "../page";
import InteractBtn from "@/app/components/InteractBtn";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import login from "@/app/styles/Login.module.css";

export default function SignUpModal({
  setIsSignUp,
}: {
  setIsSignUp: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className={login.modal__bg__wrapper}>
      <div className={login.modal__wrapper}>
        <div className={login.modal__container}>
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
          <LoginDiv>
            <span>비밀번호 확인</span>
            <LoginInput type="password" />
          </LoginDiv>
          <LoginDiv>
            <span>닉네임</span>
            <LoginInput type="text" />
          </LoginDiv>
          <div className={login.btn__container}>
            <InteractBtn width="100px" text="회원가입" />
            <InteractBtn
              width="100px"
              text="돌아가기"
              onClick={() => setIsSignUp(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
