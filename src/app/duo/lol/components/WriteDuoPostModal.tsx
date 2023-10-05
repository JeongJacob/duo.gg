import DuoSelectModal from "@/app/components/DuoSelect";
import { RootState } from "@/redux/store";
import { Dispatch, SetStateAction, useState } from "react";
import { IoMic } from "react-icons/io5";
import { useSelector } from "react-redux";
import PositionBar from "@/app/components/PositionBar";
import InteractBtn from "@/app/components/InteractBtn";
import { queueOptionData } from "../page";
import { db } from "@/firebase/clientApp";
import { addDoc, collection } from "firebase/firestore";
import {
  riotSummonersAxios,
  riotSummonersTierAxios,
} from "@/app/instance/riotInstance";
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

interface SummonerTierInfo {
  freshBlood: boolean;
  hotStreak: boolean;
  inactive: boolean;
  leagueId: string;
  leaguePoints: number;
  losses: number;
  queueType: string;
  rank: string;
  summonerId: string;
  summonerName: string;
  tier: string;
  veteran: boolean;
}
export default function WriteDuoPostModal({
  setIsWriteModal,
}: {
  setIsWriteModal: Dispatch<SetStateAction<boolean>>;
}) {
  const [summonerInput, setSummonerInput] = useState({
    summonerName: "",
    summonerBoard: "",
  });
  const [isVoiceToggle, setIsVoiceToggle] = useState(false);
  //store
  const queueValue = useSelector(
    (state: RootState) => state.selectTab.queueValue
  );
  const myPositonValue = useSelector(
    (state: RootState) => state.selectPositon.myPosition
  );
  const yourPositonValue = useSelector(
    (state: RootState) => state.selectPositon.yourPosition
  );

  console.log(queueValue.value);
  const handleAddDuoPost = async () => {
    try {
      const { summonerName, summonerBoard } = summonerInput;
      let tier = "";
      let rank = "";

      //소환사 uuid 정보 가져오기
      const getSummonerUUid = await riotSummonersAxios.get(`${summonerName}`);
      const summonerUUid = getSummonerUUid.data.id;
      const summonerProfileIconId = getSummonerUUid.data.profileIconId;

      //소환사 티어 정보 가져오기
      const getSummonerTier = await riotSummonersTierAxios.get(
        `${summonerUUid}`
      );

      if (getSummonerTier.data.length >= 1) {
        if (
          queueValue.value === "솔로랭크" ||
          queueValue.value !== "자유랭크"
        ) {
          const soloRankInfo = getSummonerTier.data.filter(
            (match: SummonerTierInfo) => match.queueType === "RANKED_SOLO_5x5"
          );
          tier = soloRankInfo[0].tier;
          rank = soloRankInfo[0].rank;
        }
        if (queueValue.value === "자유랭크") {
          const flexRankInfo = getSummonerTier.data.filter(
            (match: SummonerTierInfo) => match.queueType === "RANKED_FLEX_SR"
          );
          tier = flexRankInfo[0].tier;
          rank = flexRankInfo[0].rank;
        }
      } else {
        tier = "UNRANKED";
        rank = "";
      }

      await addDoc(collection(db, "duo/lol/post"), {
        isVoice: isVoiceToggle,
        summonerName: summonerName,
        summonerBoard: summonerBoard,
        myPositonValue: myPositonValue,
        yourPositonValue: yourPositonValue,
        queueValue: queueValue.value,
        tier: tier,
        rank: rank,
        summonerProfileIconId: summonerProfileIconId,
      });
      setIsWriteModal(false);
    } catch (err) {
      alert("소환사 정보를 불러오던 도중 실패하였습니다.");
      console.error(err);
    }
  };
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
          <input
            type="text"
            placeholder="내 소환사명"
            onChange={(e) => {
              e.preventDefault();
              setSummonerInput({
                ...summonerInput,
                summonerName: e.target.value,
              });
            }}
          />
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
          <textarea
            placeholder="작성할 메모(20자~50자 내)"
            onChange={(e) =>
              setSummonerInput({
                ...summonerInput,
                summonerBoard: e.target.value,
              })
            }
          />
        </div>
        <div className={lol.isVoice__container}>
          <IoMic size="20px" />
          <ToggleContainer $isToggle={isVoiceToggle}>
            <ToggleCircle
              $isToggle={isVoiceToggle}
              onClick={() => setIsVoiceToggle(!isVoiceToggle)}
            />
          </ToggleContainer>
        </div>
        <InteractBtn
          width="100%"
          text={"등록하기"}
          onClick={handleAddDuoPost}
        />
        <InteractBtn
          width="100%"
          text={"닫기"}
          onClick={() => setIsWriteModal(false)}
        />
      </div>
    </div>
  );
}
