import Image from "next/image";
import { styled } from "styled-components";
import lol from "@/app/styles/_LOL.module.css";
import { InteractBtn } from "../duo/lol/page";

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

export default function PositionBar() {
  return (
    <>
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
    </>
  );
}
