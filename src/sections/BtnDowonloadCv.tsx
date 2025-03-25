"use client";
import React from "react";
import { motion } from "framer-motion";

const BtnDownloadCv = () => {
  return (
    <motion.a
      href="https://flowcv.com/resume/t8dwp0el1l"
      initial={{ opacity: 0, scale: 0.8 }}
      target="_blank"
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, y: 2 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className=" fixed -z-10 md:z-50 md:bottom-12 md:right-28 bg-black/20 text-white px-5 py-3 rounded-full shadow-xl animate-bounce
                 hover:bg-black/60 hover:shadow-2xl transition duration-300 flex items-center gap-2"
    >
      <motion.svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        whileHover={{ y: -3 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <path d="M12 16l4-5h-3V4h-2v7H8l4 5zM5 18h14v2H5v-2z"></path>
      </motion.svg>
      Download CV
    </motion.a>
  );
};

export default BtnDownloadCv;
