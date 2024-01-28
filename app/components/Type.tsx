"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

function Type() {
  return (
    <TypeAnimation
      sequence={[
        "Dario",
        1000,
        "Web Developer",
        1000,
        "Mobile Developer",
        1000,
        "Full stack Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
}

export default Type;
