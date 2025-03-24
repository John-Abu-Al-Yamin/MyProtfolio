"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = [
    { title: t("footer.links.facebook"), href: "https://www.facebook.com/john.emad.7359" },
    { title: t("footer.links.github"), href: "https://github.com/John-Abu-Al-Yamin" },
    { title: t("footer.links.whatsapp"), href: "https://api.whatsapp.com/send?phone=201286976691" },
    { title: t("footer.links.gmail"), href: "mailto:je0409389@gmail.com" },
    { title: t("footer.links.linkedin"), href: "https://www.linkedin.com/in/john-abou-al-yamin-0425a02aa/" },
  ];

  return (
    <footer className="py-16 lg:py-24 overflow-x-clip">
      <div className="container">
        <div className="border-t border-white/20 py-6 text-sm flex flex-col items-center md:flex-row md:justify-between gap-8">
          <div className="text-white/40">
            {t("footer.copyright")} {/* ترجمة حقوق النشر */}
          </div>
          <div className="">
            <nav className="flex flex-col items-center md:flex-row gap-8">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-gray-400 transition"
                >
                  <span className="font-semibold">{link.title}</span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};