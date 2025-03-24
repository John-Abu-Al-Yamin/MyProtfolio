"use client";
import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StartIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import HeroOrbit from "@/components/HeroOrbit";
import "@/Lang/AppLang";
import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1200px] hero-ring"></div>

        <HeroOrbit
          size={380}
          rotation={-14}
          shouldOrbit
          shouldSpin
          spinDuration="6s"
          oribitDuration="30s"
        >
          <SparkleIcon className="size-2 rounded-full text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          shouldSpin
          spinDuration="6s"
          oribitDuration="36s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          shouldSpin
          spinDuration="6s"
          oribitDuration="38s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={520}
          rotation={-41}
          shouldOrbit
          shouldSpin
          spinDuration="6s"
          oribitDuration="44s"
        >
          <SparkleIcon className="size-2 rounded-full text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          shouldSpin
          spinDuration="6s"
          oribitDuration="38s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          shouldSpin
          spinDuration="6s"
          oribitDuration="32s"
        >
          <StartIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          shouldSpin
          spinDuration="6s"
          oribitDuration="34s"
        >
          <StartIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={650}
          rotation={-5}
          shouldOrbit
          shouldSpin
          spinDuration="6s"
          oribitDuration="46s"
        >
          <SparkleIcon className="size-3 rounded-full text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          shouldSpin
          spinDuration="6s"
          oribitDuration="40s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={720}
          rotation={85}
          shouldOrbit
          shouldSpin
          spinDuration="6s"
          oribitDuration="42s"
        >
          <SparkleIcon className="size-3 rounded-full text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          shouldSpin
          spinDuration="6s"
          oribitDuration="30s"
        >
          <StartIcon className="size-28 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={850}
          rotation={7}
          shouldOrbit
          shouldSpin
          spinDuration="6s"
          oribitDuration="30s"
        >
          <StartIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} alt="memoji" className="size-[100px]" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium ">{t("hero.available")}</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            {t("hero.name")}
          </h1>
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            {t("hero.title")}
          </h1>

          <p className="mt-4 text-center text-white/60 md:text-lg">
            {t("hero.description")}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a
            href="https://flowcv.com/resume/t8dwp0el1l"
            target="_blank"
            className="z-50 inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl "
          >
            <span className="font-semibold ">{t("hero.explore")}</span>
            <ArrowDown className="size-4" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=201286976691"
            target="_blank"
            className="z-50 inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
          >
            <span>👋</span>
            <span className="font-semibold">{t("hero.contact")}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
