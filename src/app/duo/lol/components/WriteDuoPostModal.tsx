import DuoSelectModal from "@/app/components/DuoSelect";
import { RootState } from "@/redux/store";
import { Dispatch, SetStateAction, useState } from "react";
import { IoMic } from "react-icons/io5";
import { useSelector } from "react-redux";
import PositionBar from "@/app/components/PositionBar";
import InteractBtn from "@/app/components/InteractBtn";
import { queueOptionData } from "../page";
import { styled } from "styled-components";
import lol from "@/app/styles/_LOL.module.css";

const ToggleContainer = styled.div<{ $isToggle: boolean }>`
  display: flex;
  align-items: center;
  width: 50px;
  height: 27px;
  background-color: ${(props) =>
    props.$isToggle ? "rgb(103, 207, 74)" : "rgb(177, 177, 177)"};
  border-radius: 50px;
`;

const ToggleCircle = styled.button<{ $isToggle: boolean }>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: white;
  transition: 0.5s;
  transform: ${(props) =>
    props.$isToggle ? "translateX(22px)" : "translateX(3px)"};
`;

export default function WriteDuoPostModal({
  setIsWriteModal,
}: {
  setIsWriteModal: Dispatch<SetStateAction<boolean>>;
}) {
  const [isToggle, setIsToggle] = useState(false);
  const queueValue = useSelector(
    (state: RootState) => state.selectTab.queueValue
  );
  const myPositonValue = useSelector(
    (state: RootState) => state.selectPositon.myPosition
  );
  const yourPositonValue = useSelector(
    (state: RootState) => state.selectPositon.yourPosition
  );
  return (
    <div className={lol.duoPostModal__bg__wrapper}>
      <div className={lol.duoPostModal__wrapper}>
        <div>
          <DuoSelectModal
            selectData={queueOptionData}
            width="180px"
            isQueue={true}
            defaultValue={queueValue}
          />
        </div>
        <div className={lol.summonerName__container}>
          <input type="text" placeholder="내 소환사명"></input>
        </div>
        <div className={lol.myPosition__container}>
          내 포지션
          <PositionBar type="my" />
        </div>
        <div className={lol.yourPosition__container}>
          찾고 있는 포지션
          <PositionBar type="your" />
        </div>
        <div className={lol.summonerBoard__container}>
          <textarea placeholder="작성할 메모(20자~50자 내)" />
        </div>
        <div className={lol.isVoice__container}>
          <IoMic size="20px" />
          <ToggleContainer $isToggle={isToggle}>
            <ToggleCircle
              $isToggle={isToggle}
              onClick={() => setIsToggle(!isToggle)}
            />
          </ToggleContainer>
        </div>
        <InteractBtn width="100%" text={"등록하기"} />
        <InteractBtn
          width="100%"
          text={"닫기"}
          onClick={() => setIsWriteModal(false)}
        />
      </div>
    </div>
  );
}
