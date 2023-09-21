import Image from "next/image";
import { IoMic } from "react-icons/io5";
import InteractBtn from "./InteractBtn";
import post from "@/app/styles/DuoPost.module.css";
import { LOLDuoPostType } from "../duo/lol/page";

export default function DuoPost({ postData }: { postData: LOLDuoPostType }) {
  return (
    <div className={post.wrapper}>
      <div className={post.container}>
        <div className={post.user__info__container}>
          <Image
            className={post.userImage__element}
            src={"/challenger.webp"}
            width={50}
            height={50}
            alt="adc"
          />
          <div>
            <div className={post.user__name__container}>
              <Image
                src={`/position/${postData.myPositonValue}_icon.svg`}
                width={20}
                height={20}
                alt="adc"
              />
              <span className={post.user__name__element}>
                {postData.summonerName}
              </span>
            </div>
            <div className={post.user__info__tier__container}>
              <Image
                className={post.user__info__tier}
                src={"/challenger.webp"}
                width={30}
                height={30}
                alt="adc"
              />
              <span>C1</span>
              {postData.isVoice && <IoMic className={post.user__info__voice} />}
            </div>
          </div>
        </div>
        <div className={post.user__memo__container}>
          {postData.summonerBoard}
        </div>
        <div className={post.user__record__container}>
          <div className={post.user__most__container}>
            <Image
              className={post.userImage__element}
              src={"/challenger.webp"}
              width={40}
              height={40}
              alt="adc"
            />
            <Image
              className={post.userImage__element}
              src={"/challenger.webp"}
              width={40}
              height={40}
              alt="adc"
            />
            <Image
              className={post.userImage__element}
              src={"/challenger.webp"}
              width={40}
              height={40}
              alt="adc"
            />
          </div>
          <InteractBtn width="120px" text={"전적 보기"} />
        </div>
      </div>
    </div>
  );
}
