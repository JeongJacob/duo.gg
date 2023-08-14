import home from "@/app/styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={home.wrapper}>
      <div className={home.logo__container}>
        <Image
          className={home.logo__image}
          src={"/Logo_White.png"}
          width={100}
          height={100}
          alt="duo.gg"
        />
      </div>
      <div className={home.search__container}></div>
    </div>
  );
}
