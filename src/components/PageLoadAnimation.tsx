"use client";

import { motion } from "framer-motion";

export const PageLoadAnimation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // العنصر يبدأ مخفيًا مع انزلاق للأسفل
      whileInView={{ opacity: 1, y: 0 }} // يظهر عند التمرير
      exit={{ opacity: 0, y: 50 }} // يختفي عند الخروج من الشاشة
      transition={{
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      viewport={{ once: false }} // يعيد التشغيل كل مرة يدخل الشاشة
    >
      {children}
    </motion.div>
  );
};
