"use client";
import { LoginDiv, LoginInput } from "../page";
import InteractBtn from "@/app/components/InteractBtn";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import login from "@/app/styles/Login.module.css";
import styled from "styled-components";
import { AiFillWarning } from "react-icons/ai";

interface SignUpInputT {
  email: string;
  password: string;
  passwordValid: string;
  nickname: string;
}

interface SignUpValidT {
  isEmailValid: boolean;
  isPasswordValid: boolean;
  isConfirmPasswordValid: boolean;
  isNicknameValid: boolean;
}
const InvalidSignUpInputMsg = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 0.3rem;
  color: rgb(255, 225, 0);
  animation-name: vibrate;
  animation-duration: 0.1s;
  animation-iteration-count: 4;
  font-size: 12px;

  @keyframes vibrate {
    from {
      padding-left: 0.7rem;
    }
    to {
      padding-right: 0.3rem;
    }
  }
`;

export default function SignUpModal({
  setIsSignUp,
}: {
  setIsSignUp: Dispatch<SetStateAction<boolean>>;
}) {
  const [signUpInputText, setSignUpInputText] = useState<SignUpInputT>({
    email: "",
    password: "",
    passwordValid: "",
    nickname: "",
  });

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
          <form>
            <LoginDiv>
              <span>이메일</span>
              <LoginInput type="email" placeholder="jacob@duo.gg" required />
            </LoginDiv>
            <LoginDiv>
              <span>비밀번호</span>
              <LoginInput type="password" required />
            </LoginDiv>
            <LoginDiv>
              <span>비밀번호 확인</span>
              <LoginInput type="password" required />
            </LoginDiv>
            <LoginDiv>
              <span>닉네임</span>
              <LoginInput type="text" required />
            </LoginDiv>
            <div className={login.btn__container}>
              <InteractBtn width="100px" text="회원가입" type="submit" />
              <InteractBtn
                width="100px"
                text="돌아가기"
                onClick={() => setIsSignUp(false)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
