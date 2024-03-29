"use client";
import Image from "next/image";
import React from "react";
import Type from "./Type";

export const MeSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 sm:py-16 lg:px-16">
        <div className="col-span-5 place-self-center">
          <div className="rounded-full w-[250px] h-[250px] sm:w-[210px] sm:h-[210px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] bg-gradient-to-r from-pink-300/15 to-lime-100/20 relative">
            <Image
              src="/Dario.webp"
              alt="front image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="col-span-7 text-center sm:text-left my-auto">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600">
              Hello, I&apos;m
            </span>
            <br />

            <Type />
          </h1>
        </div>
      </div>
    </section>
  );
};
