"use client";
import React from "react";
import DuoPost from "@/app/components/DuoPost";
import DuoSelect from "@/app/components/DuoSelect";
import PositionBar from "@/app/components/PositionBar";
import { styled } from "styled-components";
import lol from "@/app/styles/_LOL.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const InteractBtn = styled.button<{ width: string }>`
  background-color: #25ae25;
  width: ${(props) => props.width};
  height: 38px;
  border-radius: 5px;

  &:hover {
    background-color: #186c18;
  }
`;

const queueOptions = [
  { value: "모든 큐", label: "모든 큐" },
  { value: "솔로랭크", label: "솔로랭크" },
  { value: "자유랭크", label: "자유랭크" },
  { value: "일반게임", label: "일반게임" },
  { value: "칼바람 협곡", label: "칼바람 협곡" },
];

const tierOptions = [
  { value: "모든 티어", label: "모든 티어" },
  { value: "아이언", label: "아이언" },
  { value: "브론즈", label: "브론즈" },
  { value: "실버", label: "실버" },
  { value: "골드", label: "골드" },
  { value: "에메랄드", label: "에메랄드" },
  { value: "다이아몬드", label: "다이아몬드" },
];

function _LOL() {
  const queueValue = useSelector(
    (state: RootState) => state.selectTab.queueValue
  );
  const tierValue = useSelector(
    (state: RootState) => state.selectTab.tierValue
  );
  return (
    <div className={lol.wrapper}>
      <div className={lol.type__wrapper}>
        <DuoSelect
          type={queueOptions}
          width="180px"
          isQueue={true}
          defaultValue={queueValue}
        />
        <DuoSelect
          type={tierOptions}
          width="160px"
          isQueue={false}
          defaultValue={tierValue}
        />
      </div>
      <PositionBar />
      <DuoPost />
    </div>
  );
}

export default _LOL;
