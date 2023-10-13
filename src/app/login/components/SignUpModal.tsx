"use client";
import { LoginDiv, LoginInput } from "../page";
import InteractBtn from "@/app/components/InteractBtn";
import Image from "next/image";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
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
  const [isSignUpValid, setIsSignUpValid] = useState<SignUpValidT>({
    isEmailValid: false,
    isPasswordValid: false,
    isConfirmPasswordValid: false,
    isNicknameValid: false,
  });
  const [errorMsg, setErrorMsg] = useState({
    emailErrorMsg: "",
    passwordErrorMsg: "",
    passwordValidErrorMsg: "",
    nicknameErrorMsg: "",
  });
  const { email, password, passwordValid, nickname } = signUpInputText;
  const {
    isEmailValid,
    isPasswordValid,
    isConfirmPasswordValid,
    isNicknameValid,
  } = isSignUpValid;
  const {
    emailErrorMsg,
    passwordErrorMsg,
    passwordValidErrorMsg,
    nicknameErrorMsg,
  } = errorMsg;

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const emailRegex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      const currentEmail = e.target.value;
      setSignUpInputText((prevSignUpInputText) => ({
        ...prevSignUpInputText,
        email: currentEmail,
      }));
      if (!emailRegex.test(currentEmail)) {
        setIsSignUpValid({
          ...isSignUpValid,
          isEmailValid: true,
        });
        setErrorMsg({
          ...errorMsg,
          emailErrorMsg: "올바른 이메일 형식이 아닙니다.",
        });
      } else
        setIsSignUpValid({
          ...isSignUpValid,
          isEmailValid: false,
        });
    },
    []
  );

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
              <LoginInput
                type="email"
                placeholder="jacob@duo.gg"
                value={email}
                required
                onChange={(e) => onChangeEmail(e)}
                $isValid={isSignUpValid.isEmailValid}
              />
              {isEmailValid && (
                <InvalidSignUpInputMsg>
                  <AiFillWarning />
                  &nbsp; {emailErrorMsg}
                </InvalidSignUpInputMsg>
              )}
            </LoginDiv>
            <LoginDiv>
              <span>비밀번호</span>
              <LoginInput
                type="password"
                value={password}
                required
              />
              {isPasswordValid && (
                <InvalidSignUpInputMsg>
                  <AiFillWarning />
                  &nbsp; {passwordErrorMsg}
                </InvalidSignUpInputMsg>
              )}
            </LoginDiv>
            <LoginDiv>
              <span>비밀번호 확인</span>
              <LoginInput
                type="password"
                value={passwordValid}
                required
                $isValid={isSignUpValid.isPasswordValid}
              />
              {isConfirmPasswordValid && (
                <InvalidSignUpInputMsg>
                  <AiFillWarning />
                  &nbsp; {passwordValidErrorMsg}
                </InvalidSignUpInputMsg>
              )}
            </LoginDiv>
            <LoginDiv>
              <span>닉네임</span>
              <LoginInput
                type="text"
                value={nickname}
                required
              />
              {isNicknameValid && (
                <InvalidSignUpInputMsg>
                  <AiFillWarning />
                  &nbsp; 존재하지 않는 닉네임입니다.
                </InvalidSignUpInputMsg>
              )}
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
