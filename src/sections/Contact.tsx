"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <motion.div 
      className="py-16 lg:py-24" 
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div 
          className="bg-gradient-to-r from-emerald-400 to-sky-400 text-gray-900 py-8 px-10 rounded-s-3xl text-center md:text-left"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="font-serif text-2xl">
                {t("contact.title")}
              </h2>
              <motion.p 
                className="text-sm md:text-base mt-2"
                variants={itemVariants}
              >
                {t("contact.description")}
              </motion.p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.a
                href="https://api.whatsapp.com/send?phone=201286976691"
                target="_blank"
                className="text-white bg-gray-900 inline-flex items-center gap-2 px-6 h-12 rounded-xl w-max"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="font-semibold">
                  {t("contact.buttonText")}
                </span>
                <ArrowUpRightIcon className="size-4" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};