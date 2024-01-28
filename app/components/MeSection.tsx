import Image from "next/image";
import React from "react";
import Type from "./Type";

export const MeSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600">
              Hello, I&apos;m
            </span>
            <br />

            <Type />
          </h1>
        </div>
        <div className="col-span-5 place-self-center">
          <div className="rounded-full bg-[#121212] bg-opacity-100 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/Dario.webp"
              alt="front image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
