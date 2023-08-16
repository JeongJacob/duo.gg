import Image from "next/image";
import post from "@/app/styles/DuoPost.module.css";
import { IoMic } from "react-icons/io5";

export default function DuoPost() {
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
                src={"/position/mid_icon.svg"}
                width={20}
                height={20}
                alt="adc"
              />
              <span className={post.user__name__element}>forest 965470</span>
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
              <IoMic className={post.user__info__voice} />
            </div>
          </div>
        </div>
        <div className={post.user__memo__container}>
          안녕하세요 잘하는 정글라이너 구합니다.
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
          <button>전적 보기</button>
        </div>
      </div>
    </div>
  );
}
