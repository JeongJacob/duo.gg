"use client";
import { useEffect, useState } from "react";
import DuoPost from "@/app/components/DuoPost";
import DuoSelect from "@/app/components/DuoSelect";
import PositionBar from "@/app/components/PositionBar";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import InteractBtn from "@/app/components/InteractBtn";
import lol from "@/app/styles/_LOL.module.css";
import WriteDuoPostModal from "./components/WriteDuoPostModal";
import { db } from "@/firebase/clientApp";
import {
  DocumentData,
  QuerySnapshot,
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";

export const queueOptionData = [
  { value: "모든 큐", label: "모든 큐" },
  { value: "솔로랭크", label: "솔로랭크" },
  { value: "자유랭크", label: "자유랭크" },
  { value: "일반게임", label: "일반게임" },
  { value: "칼바람 협곡", label: "칼바람 협곡" },
];

const tierOptionsData = [
  { value: "모든 티어", label: "모든 티어" },
  { value: "아이언", label: "아이언" },
  { value: "브론즈", label: "브론즈" },
  { value: "실버", label: "실버" },
  { value: "골드", label: "골드" },
  { value: "에메랄드", label: "에메랄드" },
  { value: "다이아몬드", label: "다이아몬드" },
];

export interface LOLDuoPostType {
  isVoice: boolean;
  summonerName: string;
  summonerBoard: string;
  myPositonValue: string;
  yourPositonValue: string;
  queueValue: string;
}

function _LOL() {
  const [isWriteModal, setIsWriteModal] = useState(false);
  const [postData, setPostData] = useState<LOLDuoPostType[]>([]);
  const queueValue = useSelector(
    (state: RootState) => state.selectTab.queueValue
  );
  const tierValue = useSelector(
    (state: RootState) => state.selectTab.tierValue
  );

  useEffect(() => {
    const collectionPath = "duo/lol/post";
    const q = query(collection(db, collectionPath));

    const getDuoPostData = (
      snapshot: QuerySnapshot<DocumentData, DocumentData>
    ) => {
      const newDataArray: LOLDuoPostType[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data() as LOLDuoPostType;
        newDataArray.push(data);
      });
      setPostData(newDataArray);
    };

    const callSnapShot = onSnapshot(q, getDuoPostData);

    return () => {
      callSnapShot();
    };
  }, [db]);

  return (
    <>
      {isWriteModal && <WriteDuoPostModal setIsWriteModal={setIsWriteModal} />}
      <div className={lol.wrapper}>
        <div className={lol.type__wrapper}>
          <DuoSelect
            selectData={queueOptionData}
            width="180px"
            isQueue={true}
            defaultValue={queueValue}
          />
          <DuoSelect
            selectData={tierOptionsData}
            width="160px"
            isQueue={false}
            defaultValue={tierValue}
          />
        </div>
        <div className={lol.position__write__wrapper}>
          <PositionBar />
          <InteractBtn
            width="100px"
            text={"글 쓰기"}
            onClick={() => setIsWriteModal(true)}
          />
        </div>
        {postData.map((post, idx) => (
          <DuoPost postData={post} key={idx} />
        ))}
      </div>
    </>
  );
}

export default _LOL;
