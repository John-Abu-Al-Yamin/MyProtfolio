"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { CgMail } from "react-icons/cg";
import { FaFacebook, FaWhatsapp, FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbFileCv } from "react-icons/tb";

const Navbar = () => {
  const { i18n } = useTranslation();

  return (
    <nav className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 bg-black/15 backdrop-blur-md px-2 sm:px-4 py-2 flex gap-1 sm:gap-2 md:gap-3 lg:gap-4 rounded-full z-50">
      <a
        href="https://flowcv.com/resume/t8dwp0el1l"
        target="_blank"
        className="p-2 sm:p-3 rounded-full flex text-lg transition-colors text-gray-300 hover:bg-black/30"
      >
        <TbFileCv className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=201286976691"
        target="_blank"
        className="p-2 sm:p-3 rounded-full flex text-lg transition-colors text-gray-300 hover:bg-black/30"
      >
        <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </a>
      <a
        href="https://www.facebook.com/john.emad.7359"
        target="_blank"
        className="p-2 sm:p-3 rounded-full flex text-lg transition-colors text-gray-300 hover:bg-black/30"
      >
        <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </a>
      <a
        href="mailto:je0409389@gmail.com"
        target="_blank"
        className="p-2 sm:p-3 rounded-full flex text-lg transition-colors text-gray-300 hover:bg-black/30"
      >
        <CgMail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/john-abou-al-yamin-0425a02aa/"
        target="_blank"
        className="p-2 sm:p-3 rounded-full flex text-lg transition-colors text-gray-300 hover:bg-black/30"
      >
        <FaLinkedinIn className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </a>
      <a
        href="https://github.com/John-Abu-Al-Yamin"
        target="_blank"
        className="p-2 sm:p-3 rounded-full flex text-lg transition-colors text-gray-300 hover:bg-black/30"
      >
        <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </a>

      {/* أزرار تغيير اللغة */}
      <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
        <button
          onClick={() => i18n.changeLanguage("ar")}
          className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full transition-colors ${
            i18n.language === "ar"
              ? "bg-white text-black font-bold"
              : "text-white hover:bg-white/20"
          }`}
        >
          AR
        </button>
        <button
          onClick={() => i18n.changeLanguage("en")}
          className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full transition-colors ${
            i18n.language === "en"
              ? "bg-white text-black font-bold"
              : "text-white hover:bg-white/20"
          }`}
        >
          EN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
