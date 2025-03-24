"use client";
import "@/Lang/AppLang"; // Import i18n configuration
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex justify-center items-center relative top-3">
      <nav className=" flex gap-1 p-0.5 border border-white/10 rounded-full backdrop-blur">
        <a
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          href="#"
        >
          {t("navigation.home")}
        </a>
        <a className="nav-item" href="#projects">
          {t("navigation.projects")}
        </a>
        <a className="nav-item" href="#about">
          {t("navigation.about")}
        </a>
        <a className="nav-item" href="#contact">
          {t("navigation.contact")}
        </a>
      </nav>
    </div>
  );
};
