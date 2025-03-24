"use client";
import "@/Lang/AppLang"; // Import i18n configuration
import { useTranslation } from "react-i18next";

import StartIcon from "@/assets/icons/star.svg";

export const TapeSection = () => {
  const { t, i18n } = useTranslation();

  const words = [
    t("tape.words.performant"),
    t("tape.words.accessible"),
    t("tape.words.scalable"),
    t("tape.words.intuitive"),
    t("tape.words.secure"),
    t("tape.words.userFriendly"),
    t("tape.words.maintainable"),
    t("tape.words.responsive"),
    t("tape.words.crossPlatform"),
    t("tape.words.seoFriendly"),
    t("tape.words.progressive"),
    t("tape.words.usable"),
    t("tape.words.reliable"),
    t("tape.words.responsive"),
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,rgba(0,0,0,1)10%,rgba(0,0,0,1)90%,transparent)]">
          <div
            className={`flex flex-none gap-4 pr-4 py-3 ${
              i18n.language === "ar"
                ? "animate-move-right-ar"
                : "animate-move-left-en"
            } [animation-duration:20s] -translate-x-1/2`}
          >
            {...new Array(2).fill(0).map((_, index) => (
              <>
                {words.map((word, index) => (
                  <div className="inline-flex gap-4 items-center" key={index}>
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StartIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
