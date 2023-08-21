"use client";
import React from "react";
import { styled } from "styled-components";
import DuoPost from "@/app/components/DuoPost";
import DuoSelectModal from "@/app/components/DuoSelect";
import PositionBar from "@/app/components/PositionBar";
import lol from "@/app/styles/_LOL.module.css";

export const InteractBtn = styled.button<{ width: string }>`
  background-color: #25ae25;
  width: ${(props) => props.width};
  height: 38px;
  border-radius: 5px;

  &:hover {
    background-color: #186c18;
  }
`;

function _LOL() {
  return (
    <div className={lol.wrapper}>
      <div className={lol.type__wrapper}>
        <DuoSelectModal type="queue" />
        <DuoSelectModal type="tier" />
      </div>
      <PositionBar />
      <DuoPost />
    </div>
  );
}

export default _LOL;
