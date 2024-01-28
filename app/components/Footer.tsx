"use client";

import { Typography } from "@material-tailwind/react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const footerSections = [
    {
      name: "Github",
      link: "https://github.com/dturin1997",
      icon: <AiFillGithub />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/djturin/",
      icon: <FaLinkedinIn />,
    },
  ];

  const footerList = footerSections.map((value, index) => (
    <li key={index}>
      <Typography
        as="a"
        href={value.link}
        target="blank"
        color="white"
        className="font-normal transition-colors hover:text-lime-500 focus:text-lime-500 text-[24px] md:text-3xl lg:text-4xl"
      >
        {value.icon}
      </Typography>
    </li>
  ));

  return (
    <footer className=" bg-[#121212] bg-opacity-90">
      <div className="container mx-auto">
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 py-6 text-center md:justify-between">
          <Typography
            color="white"
            className="font-normal text-base md:text-lg lg:text-xl"
          >
            &copy; {year} djturin.dev
          </Typography>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            {footerList}
          </ul>
        </div>
      </div>
    </footer>
  );
}
