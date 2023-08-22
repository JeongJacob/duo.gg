"use client";
import Image from "next/image";
import { styled } from "styled-components";
import { InteractBtn } from "../duo/lol/page";
import { useState } from "react";
import lol from "@/app/styles/_LOL.module.css";

interface PositionT {
  position: string;
  num: number;
}

const PositonBtn = styled.button<{
  selected: number;
  idx: number;
}>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 1px 0px 1px 1px;
  border-style: solid;
  border-color: rgb(91, 91, 91);
  background-color: ${(props) =>
    props.selected === props.idx ? "rgb(79, 79, 79)" : ""};
  &:hover {
    background-color: rgb(79, 79, 79);
  }
`;

const positionBar: PositionT[] = [
  {
    position: "all",
    num: 0,
  },
  {
    position: "top",
    num: 1,
  },
  {
    position: "jug",
    num: 2,
  },
  {
    position: "mid",
    num: 3,
  },
  {
    position: "adc",
    num: 4,
  },
  {
    position: "sup",
    num: 5,
  },
];
export default function PositionBar() {
  const [positionSelected, setPositionSelected] = useState(0);

  const handleSelectedPosition = (
    e: React.MouseEvent<HTMLButtonElement>,
    position: number
  ) => {
    e.preventDefault();
    setPositionSelected(position);
  };

  return (
    <>
      <div className={lol.position__wrapper}>
        <ul className={lol.position__container}>
          {positionBar.map((position) => (
            <li key={position.num}>
              <PositonBtn
                selected={positionSelected}
                idx={position.num}
                onClick={(e) => {
                  handleSelectedPosition(e, position.num);
                }}
              >
                <Image
                  src={`/position/${position.position}_icon.svg`}
                  width={20}
                  height={20}
                  alt="adc"
                />
              </PositonBtn>
            </li>
          ))}
        </ul>
        <InteractBtn width="100px">글 쓰기</InteractBtn>
      </div>
    </>
  );
}
