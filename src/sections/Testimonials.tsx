"use client";
import "@/Lang/AppLang"; // Import i18n configuration
import { useTranslation } from "react-i18next";

import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Card from "@/components/Card";

export const TestimonialsSection = () => {
  const { t, i18n } = useTranslation();

  // استخدام الدالة t لترجمة النصوص
  const testimonials = [
    {
      name: t("testimonials.0.name"), // ترجمة الاسم
      position: t("testimonials.0.position"), // ترجمة المنصب
      text: t("testimonials.0.text"), // ترجمة النص
      avatar: memojiAvatar1, // الصورة تبقى كما هي
    },
    {
      name: t("testimonials.1.name"),
      position: t("testimonials.1.position"),
      text: t("testimonials.1.text"),
      avatar: memojiAvatar2,
    },
    {
      name: t("testimonials.2.name"),
      position: t("testimonials.2.position"),
      text: t("testimonials.2.text"),
      avatar: memojiAvatar3,
    },
    {
      name: t("testimonials.3.name"),
      position: t("testimonials.3.position"),
      text: t("testimonials.3.text"),
      avatar: memojiAvatar4,
    },
    {
      name: t("testimonials.4.name"),
      position: t("testimonials.4.position"),
      text: t("testimonials.4.text"),
      avatar: memojiAvatar5,
    },
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title={t("testimonials.title")} // ترجمة العنوان
          eyebrow={t("testimonials.eyebrow")} // ترجمة Eyebrow
          description={t("testimonials.description")} // ترجمة الوصف
        />
        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,rgba(0,0,0,1)10%,rgba(0,0,0,1)90%,transparent)]">
          <div
            className={`flex gap-8 flex-none [animation-duration:30s] hover:[animation-play-state:paused] ${
              i18n.language === "ar" ? "animate-move-left-ar" : "animate-move-left-en"
            }`}
          >
            {[...new Array(2).fill(0)].map((_, index) => (
              <>
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={index}
                    className="max-w-xs md:max-w-md md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center ">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center flex-shrink-0 rounded-full ">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div className="">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};