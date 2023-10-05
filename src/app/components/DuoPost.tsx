import Image from "next/image";
import { IoMic } from "react-icons/io5";
import InteractBtn from "./InteractBtn";
import { LOLDuoPostType } from "../duo/lol/page";
import Link from "next/link";
import post from "@/app/styles/DuoPost.module.css";

export default function DuoPost({ postData }: { postData: LOLDuoPostType }) {
  const handlePositionFilter = (position: string) => {
    let filteredPosition = "";
    if (position === "all") filteredPosition = "포지션 상관 없이";
    if (position === "top") filteredPosition = "탑 유저";
    if (position === "jug") filteredPosition = "정글 유저";
    if (position === "mid") filteredPosition = "미드 유저";
    if (position === "adc") filteredPosition = "원딜 유저";
    if (position === "sup") filteredPosition = "서폿 유저";

    return filteredPosition;
  };

  return (
    <div className={post.wrapper}>
      <div className={post.container}>
        <div className={post.summoner__info__container}>
          <Image
            className={post.summonerImage__element}
            src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/profileicon/${postData.summonerProfileIconId}.png`}
            width={50}
            height={50}
            alt={postData.summonerName}
          />
          <div>
            <div className={post.summoner__title__container}>
              {postData.queueValue}&nbsp;
              {handlePositionFilter(postData.yourPositonValue)}&nbsp;구합니다.
            </div>
            <div className={post.summoner__info__tier__container}>
              <Image
                className={post.summoner__info__tier}
                src={
                  postData.tier !== "Unranked"
                    ? `/tier/${postData.tier}.webp`
                    : "/tier/unranked.svg"
                }
                width={30}
                height={30}
                alt={postData.tier}
              />
              <span>
                {postData.tier}&nbsp;
                {postData.rank}
              </span>
              {postData.isVoice && (
                <IoMic className={post.summoner__info__voice} />
              )}
            </div>
          </div>
        </div>
        <div className={post.summoner__board__container}>
          {postData.summonerBoard}
        </div>
        <div className={post.summoner__record__container}>
          <div className={post.summoner__name__container}>
            <Image
              src={`/position/${postData.myPositonValue}_icon.svg`}
              width={20}
              height={20}
              alt={postData.myPositonValue}
            />
            <span className={post.summoner__name__element}>
              {postData.summonerName}
            </span>
          </div>
          {/* 추후 마이페이지로 이동 */}
          <Link
            href={`https://www.op.gg/summoners/kr/${postData.summonerName}`}
            target="blink"
          >
            <InteractBtn width="120px" text={"전적 보기"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
