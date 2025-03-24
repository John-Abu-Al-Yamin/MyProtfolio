"use client";

import { motion } from "framer-motion";

export const HomeAnimations = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }} // تأثير بداية (شفافية + تكبير + بلور)
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} // نهاية التأثير
      transition={{
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2, // تأخير بسيط لاحترافية أكثر
      }}
      viewport={{ once: true, amount: 0.2 }} // يظهر عند التمرير
    >
      {children}
    </motion.div>
  );
};
