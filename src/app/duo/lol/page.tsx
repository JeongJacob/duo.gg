"use client";
import Image from "next/image";
import React from "react";
import lol from "@/app/styles/_LOL.module.css";
import { styled } from "styled-components";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import DuoPost from "@/app/components/DuoPost";

const PositonBtn = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 1px 0px 1px 1px;
  border-style: solid;
  border-color: rgb(91, 91, 91);
  &:hover {
    background-color: rgb(79, 79, 79);
  }
`;

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
        <div className={lol.queue__type__container}>
          <span>모든 큐</span>
          <AiFillCaretDown />
        </div>
        <div className={lol.tier__type__container}>
          <span>모든 티어</span>
          <AiFillCaretDown />
        </div>
      </div>
      <div className={lol.position__wrapper}>
        <div className={lol.position__container}>
          <PositonBtn>
            <Image
              src={"/position/all_icon.svg"}
              width={20}
              height={20}
              alt="adc"
            ></Image>
          </PositonBtn>
          <PositonBtn>
            <Image
              src={"/position/top_icon.svg"}
              width={20}
              height={20}
              alt="adc"
            ></Image>
          </PositonBtn>
          <PositonBtn>
            <Image
              src={"/position/jug_icon.svg"}
              width={20}
              height={20}
              alt="adc"
            ></Image>
          </PositonBtn>
          <PositonBtn>
            <Image
              src={"/position/mid_icon.svg"}
              width={20}
              height={20}
              alt="adc"
            ></Image>
          </PositonBtn>
          <PositonBtn>
            <Image
              src={"/position/adc_icon.svg"}
              width={20}
              height={20}
              alt="adc"
            ></Image>
          </PositonBtn>
          <PositonBtn>
            <Image
              src={"/position/sup_icon.svg"}
              width={20}
              height={20}
              alt="adc"
            ></Image>
          </PositonBtn>
        </div>
        <InteractBtn width="100px">글 쓰기</InteractBtn>
      </div>
      <DuoPost />
    </div>
  );
}

export default _LOL;
