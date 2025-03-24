"use client";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StartIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import NextJsIcon from "@/assets/icons/nextjs.svg";
import GitIcon from "@/assets/icons/git.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import PostmanIcon from "@/assets/icons/postman.svg";
import FirebaseIcon from "@/assets/icons/Firebase.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import ShadcnIcon from "@/assets/icons/shadcn.svg";
import mapImage from "@/assets/images/map.png";
import smileMemji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

import "@/Lang/AppLang";
import { useTranslation } from "react-i18next";

export const AboutSection = () => {
  const constraintRef = useRef(null);
  const { t, i18n } = useTranslation();

  const toolboxItems = [
    {
      title: t("about.toolbox.html5"), // ترجمة HTML5
      iconType: HTMLIcon,
    },
    {
      title: t("about.toolbox.css3"), // ترجمة CSS3
      iconType: CSSIcon,
    },
    {
      title: t("about.toolbox.tailwind"), // ترجمة Tailwind CSS
      iconType: TailwindIcon,
    },
    {
      title: t("about.toolbox.shadcn"), // ترجمة Shadcn UI
      iconType: ShadcnIcon,
    },
    {
      title: t("about.toolbox.javascript"), // ترجمة JavaScript
      iconType: JavaScriptIcon,
    },
    {
      title: t("about.toolbox.react"), // ترجمة React
      iconType: ReactIcon,
    },
    {
      title: t("about.toolbox.nextjs"), // ترجمة Next.js
      iconType: NextJsIcon,
    },
    {
      title: t("about.toolbox.git"), // ترجمة Git
      iconType: GitIcon,
    },
    {
      title: t("about.toolbox.github"), // ترجمة GitHub
      iconType: GitHubIcon,
    },
    {
      title: t("about.toolbox.figma"), // ترجمة Figma
      iconType: FigmaIcon,
    },
    {
      title: t("about.toolbox.postman"), // ترجمة Postman
      iconType: PostmanIcon,
    },
    {
      title: t("about.toolbox.firebase"), // ترجمة Firebase
      iconType: FirebaseIcon,
    },
    {
      title: t("about.toolbox.chrome"), // ترجمة Chrome
      iconType: ChromeIcon,
    },
  ];

  const libers = [
    {
      title: t("about.libers.redux"), // ترجمة Redux
      emoji: "🔄",
      left: "5%",
      top: "5%",
    },
    {
      title: t("about.libers.reduxToolkit"), // ترجمة Redux Toolkit
      emoji: "🧰",
      left: "50%",
      top: "5%",
    },
    
    {
      title: t("about.libers.axios"), // ترجمة Axios
      emoji: "🌐",
      left: "10%",
      top: "35%",
    },
    {
      title: t("about.libers.reactQuery"), // ترجمة React Query
      emoji: "🔍",
      left: "35%",
      top: "40%",
    },
    {
      title: t("about.libers.zustand"), // ترجمة Zustand
      emoji: "🐻",
      left: "60%",
      top: "45%",
    },
    {
      title: t("about.libers.typescript"), // ترجمة Typescript
      emoji: "🔷",
      left: "5%",
      top: "65%",
    },
    {
      title: t("about.libers.flowbite"), // ترجمة Flowbite
      emoji: "💨",
      left: "45%",
      top: "70%",
    },
    {
      title: t("about.libers.mui"), // ترجمة MUI
      emoji: "🎨",
      left: "30%",
      top: "7%",
    },
    {
      title: t("about.libers.swiper"), // ترجمة Swiper
      emoji: "📱",
      left: "80%",
      top: "8%",
    },
    {
      title: t("about.libers.shadcn"), // ترجمة Shadcn UI
      emoji: "🎨",
      left: "66%",
      top: "14%",
    },
    {
      title: t("about.libers.swal"), // 
      emoji: "📱",
      left: "70%",
      top: "16%",
    },
  ];

  return (
    <div className="py-16 lg:py-24" id="about">
      <div className="container">
        <SectionHeader
          eyebrow={t("about.eyebrow")} // ترجمة Eyebrow
          title={t("about.title")} // ترجمة العنوان
          description={t("about.description")} // ترجمة الوصف
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-8">
            {/* <Card className="h-[320px] col-span-2 ">
              <CardHeader
                title={t("about.myReads.title")} // ترجمة عنوان My Reads
                description={t("about.myReads.description")} // ترجمة وصف My Reads
                className="px-6 pt-6 md:mt-0"
              />

              <div className="w-40 mx-auto mt-8">
                <Image src={bookImage} alt="book-Image" />
              </div>
            </Card> */}

            <Card className="h-[320px] p-0 col-span-5">
              <CardHeader
                className="px-6 pt-6"
                title={t("about.myToolbox.title")}
                description={t("about.myToolbox.description")}
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6 cursor-pointer"
                itemsWrapperClassName={
                  i18n.language === "ar"
                    ? "animate-move-right-ar [animation-duration:30s] hover:[animation-play-state:paused]"
                    : "animate-move-left-en [animation-duration:30s] hover:[animation-play-state:paused]"
                }
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6 cursor-pointer"
                itemsWrapperClassName={
                  i18n.language === "ar"
                    ? "-translate-x-1/2 animate-move-left-ar [animation-duration:30s] hover:[animation-play-state:paused]"
                    : "-translate-x-1/2 animate-move-right-en [animation-duration:30s] hover:[animation-play-state:paused]"
                }
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3">
              <CardHeader
                title={t("about.beyondCode.title")} // ترجمة عنوان Beyond the Code
                description={t("about.beyondCode.description")} // ترجمة وصف Beyond the Code
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {libers.map((hobby, index) => (
                  <motion.div
                    key={index}
                    className="cursor-pointer inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950 ">
                      {hobby.title}
                    </span>
                    <span className="">{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2">
              <Image
                src={mapImage}
                alt="map-Image"
                className="w-full h-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-900/30 animate-pulse [animation-duration:3s]">
                <Image
                  src={smileMemji}
                  alt="memoji-Image"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
