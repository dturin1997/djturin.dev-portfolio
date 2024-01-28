"use client";

import { Typography } from "@material-tailwind/react";

export default function Footer() {
  const year = new Date().getFullYear();

  const footerSections = ["About Us", "License", "Contribute", "Contact Us"];

  const footerList = footerSections.map((value, index) => (
    <li key={index}>
      <Typography
        as="a"
        href="#"
        color="white"
        className="font-normal transition-colors hover:text-lime-500 focus:text-lime-500 text-base md:text-lg lg:text-xl"
      >
        {value}
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
