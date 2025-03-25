"use client";

import movieApp from "@/assets/images/portfolio1.png";
import bseecallEcommerce from "@/assets/images/portfolio2.png";
import ecommerce from "@/assets/images/portfolio3.png";
import dashboard from "@/assets/images/portfolio4.png";
import restaurant from "@/assets/images/portfolio5.png";
import arabGiftCard from "@/assets/images/portfolio6.png";
import palmCode from "@/assets/images/portfolio7.png";
import vscode from "@/assets/images/portfolio8.png";

import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import "@/Lang/AppLang"; // Import i18n configuration
import { useTranslation } from "react-i18next";

export const ProjectsSection = () => {
  const { t, i18n } = useTranslation();

  const portfolioProjects = [
    {
      company: t("projects.portfolio.4.company"), // Arab Gift Card
      year: t("projects.portfolio.4.year"),
      title: t("projects.portfolio.4.title"),
      results: [
        { title: t("projects.portfolio.4.results.0.title") },
        { title: t("projects.portfolio.4.results.1.title") },
        { title: t("projects.portfolio.4.results.2.title") },
      ],
      link: "https://arabgiftcard.com/ar",
      image: arabGiftCard,
    },
    {
      company: t("projects.portfolio.5.company"), // Palm Codes
      year: t("projects.portfolio.5.year"),
      title: t("projects.portfolio.5.title"),
      results: [
        { title: t("projects.portfolio.5.results.0.title") },
        { title: t("projects.portfolio.5.results.1.title") },
        { title: t("projects.portfolio.5.results.2.title") },
      ],
      link: "https://palmcodes.com/",
      image: palmCode,
    },
    {
      company: t("projects.portfolio.0.company"), // BseeCall
      year: t("projects.portfolio.0.year"),
      title: t("projects.portfolio.0.title"),
      results: [
        { title: t("projects.portfolio.0.results.0.title") },
        { title: t("projects.portfolio.0.results.1.title") },
        { title: t("projects.portfolio.0.results.2.title") },
      ],
      link: "https://bellacasa-furniture-react-js.vercel.app/home",
      image: bseecallEcommerce,
    },

    {
      company: t("projects.portfolio.7.company"), // Vcode clone
      year: t("projects.portfolio.7.year"),
      title: t("projects.portfolio.7.title"),
      results: [
        { title: t("projects.portfolio.7.results.0.title") },
        { title: t("projects.portfolio.7.results.1.title") },
        { title: t("projects.portfolio.7.results.2.title") },
      ],
      link: "https://exclusive-e-commerce-react-js.vercel.app/home",
      image: vscode,
    },

    {
      company: t("projects.portfolio.1.company"), // E-commerce Platform
      year: t("projects.portfolio.1.year"),
      title: t("projects.portfolio.1.title"),
      results: [
        { title: t("projects.portfolio.1.results.0.title") },
        { title: t("projects.portfolio.1.results.1.title") },
        { title: t("projects.portfolio.1.results.2.title") },
      ],
      link: "https://exclusive-e-commerce-react-js.vercel.app/home",
      image: ecommerce,
    },

    {
      company: t("projects.portfolio.2.company"), // Movie App
      year: t("projects.portfolio.2.year"),
      title: t("projects.portfolio.2.title"),
      results: [
        { title: t("projects.portfolio.2.results.0.title") },
        { title: t("projects.portfolio.2.results.1.title") },
        { title: t("projects.portfolio.2.results.2.title") },
      ],
      link: "https://movie-pi-hazel.vercel.app/",
      image: movieApp,
    },
    {
      company: t("projects.portfolio.3.company"), // Restaurant App
      year: t("projects.portfolio.3.year"),
      title: t("projects.portfolio.3.title"),
      results: [
        { title: t("projects.portfolio.3.results.0.title") },
        { title: t("projects.portfolio.3.results.1.title") },
        { title: t("projects.portfolio.3.results.2.title") },
      ],
      link: "https://restaurant-swart-xi.vercel.app/home",
      image: restaurant,
    },
    {
      company: t("projects.portfolio.6.company"), // School Management System
      year: t("projects.portfolio.6.year"),
      title: t("projects.portfolio.6.title"),
      results: [
        { title: t("projects.portfolio.6.results.0.title") },
        { title: t("projects.portfolio.6.results.1.title") },
        { title: t("projects.portfolio.6.results.2.title") },
      ],
      link: "https://system-dashboard.vercel.app/",
      image: dashboard,
    },
  ];

  const ref = useRef(null); // Reference for the scroll container
  const { scrollYProgress } = useScroll({ target: ref }); // Track scroll progress
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]); // Scale animation
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]); // Opacity animation

  return (
    <section
      id="projects"
      className="pb-16 lg:py-24 relative h-screen overflow-y-auto"
      style={{
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE and Edge
      }}
    >
      {/* Hide scrollbar for Chrome, Safari, and Opera */}
      <style jsx>{`
        #projects::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="container">
        <SectionHeader
          title={t("projects.featured")}
          eyebrow={t("projects.real_world_results")}
          description={t("projects.description")}
        />

        <div
          ref={ref}
          className="flex flex-col gap-16 md:flex-row md:flex-wrap mt-10 md:mt-20"
        >
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={index}
              style={{ scale, opacity }} // Apply scale and opacity animations
              className="w-full sticky top-0" // Make the card sticky
            >
              <Card className="p-8 md:pt-12 md:px-10">
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                  }}
                ></div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/10 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result, index) => (
                        <li
                          key={index}
                          className="flex gap-2 text-sm md:text-base text-white/50"
                        >
                          <CheckIcon className="size-5" />
                          <span className="">{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={project.link} className="">
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 ">
                        <span>{t("projects.visit_live")}</span>
                        <ArrowUpRightIcon className="size-5 md:size-6" />
                      </button>
                    </a>
                  </div>
                  <div className="">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0"
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
