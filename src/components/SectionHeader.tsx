"use client"; // أضف هذا السطر إذا لم يكن موجودًا
import { useTranslation } from "react-i18next";

const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  const { i18n } = useTranslation(); // استخدام i18n للتحقق من اللغة الحالية

  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"}> {/* تحديد اتجاه النص */}
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text">
          {eyebrow}
        </p>
      </div>
      <h2
        className={`font-serif text-3xl md:text-5xl text-center mt-6 max-w-md mx-auto ${
          i18n.language === "ar" ? "text-right" : "text-left"
        }`} // تعديل محاذاة النص
      >
        {title}
      </h2>
      <p
        className={`text-center md:text-lg lg:text-xl text-white/60 mt-6 ${
          i18n.language === "ar" ? "text-right" : "text-left"
        }`} // تعديل محاذاة النص
      >
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;