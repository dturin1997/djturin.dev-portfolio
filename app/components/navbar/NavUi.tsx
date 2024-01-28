"use client";

import React, { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import TabButton from "@components/TabButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavUI() {
  const pathname = usePathname();

  const [openNav, setOpenNav] = React.useState(false);
  const [tab, setTab] = useState("pathname");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  useEffect(() => {
    handleTabChange(pathname);
  }, [pathname]);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navSections = [
    { name: "Home", route: "/" },
    { name: "Resume", route: "/resume" },
    { name: "Projects", route: "/projects" },
    { name: "Contact", route: "/contact" },
  ];

  const navList = (
    <ul className="py-4 flex flex-col items-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navSections.map((value, index) => (
        <Typography
          key={index}
          as="li"
          color="white"
          className="p-1 font-normal"
        >
          <Link
            href={value.route}
            className="flex items-center text-base md:text-lg lg:text-xl"
          >
            <TabButton
              selectTab={() => handleTabChange(value.route)}
              active={tab === value.route}
            >
              {value.name}
            </TabButton>
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full border-0 rounded-none py-2 lg:py-4 bg-[#121212] bg-opacity-55">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src="/Logo.png" alt="Logo" width={200} height={200} />
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
      </div>
    </Navbar>
  );
}
