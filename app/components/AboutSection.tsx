"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Chip } from "@material-tailwind/react";
import { Icon } from "@iconify/react";

const SKILLSS = [
  {
    name: "React Js",
    icon: <Icon className="size-5 lg:" icon="skill-icons:react-dark" />,
  },
  {
    name: "Next Js",
    icon: <Icon className="size-5" icon="logos:nextjs-icon" />,
  },
  {
    name: "Angular",
    icon: <Icon className="size-5" icon="vscode-icons:file-type-angular" />,
  },
  { name: "Redux", icon: <Icon className="size-5" icon="skill-icons:redux" /> },
  {
    name: "Node Js",
    icon: <Icon className="size-5" icon="skill-icons:nodejs-light" />,
  },
  {
    name: "Express",
    icon: <Icon className="size-5" icon="skill-icons:expressjs-light" />,
  },
  {
    name: "MongoDB",
    icon: <Icon className="size-5" icon="skill-icons:mongodb" />,
  },
  {
    name: "SQL Server",
    icon: <Icon className="size-5" icon="devicon:microsoftsqlserver" />,
  },
  { name: ".NET", icon: <Icon className="size-5" icon="logos:dotnet" /> },
  { name: "HTML", icon: <Icon className="size-5" icon="devicon:html5" /> },
  {
    name: "CSS",
    icon: <Icon className="size-5" icon="vscode-icons:file-type-css" />,
  },
  {
    name: "JavaScript",
    icon: <Icon className="size-5" icon="logos:javascript" />,
  },
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex flex-wrap">
        {SKILLSS.map((skill, index) => (
          <li key={index} className="pr-2 pt-1">
            <Chip
            
              className="bg-gradient-to-r from-lime-400 to-green-600 text-white font-semibold hover:text-[#121212] lg:h-8"
              value={skill.name}
              icon={skill.icon}
            />
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="flex flex-wrap">
        <li className="pr-2 pt-1">
          <Chip
            className="bg-gradient-to-r from-lime-400 to-green-600 text-white font-semibold hover:text-[#121212]"
            value="Software Design and Development"
          />
        </li>
        <li className="pr-2 pt-1">
          <Chip
            className="bg-gradient-to-r from-lime-400 to-green-600 text-white font-semibold hover:text-[#121212]"
            value="Tecsup"
          />
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="flex flex-wrap">
        <li className="pr-2 pt-1">
          <Chip
            className="bg-gradient-to-r from-lime-400 to-green-600 text-white font-semibold hover:text-[#121212]"
            value="NDG Linux Unhatched"
          />
        </li>
        <li className="pr-2 pt-1">
          <Chip
            className="bg-gradient-to-r from-lime-400 to-green-600 text-white font-semibold hover:text-[#121212]"
            value="PCAP: Programming Essentials in Python"
          />
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="flex flex-col justify-items-center items-center gap-8 py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-600 mb-4">
            About Me
          </h2>
          <p className="text-white text-base md:text-lg">
            Hey there! I&apos;m a skilled full-stack web developer who loves
            building cool and dynamic web apps. I&apos;m all about{" "}
            {SKILLSS.map((skill, index) => (
              <span
                key={index}
                className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-600"
              >
                {skill.name}
                {", "}
              </span>
            ))}
            and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-600">
              Git
            </span>
            . I&apos;m always up for learning new stuff and improving my skills.
            I&apos;m a team player, super excited to jump into collaborative
            projects and work together with others to create some awesome
            applications. Let&apos;s make things happen!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
        <Image
          alt="a
          bout-image"
          src="/about-section.jpeg"
          className="mt-4 bg-lime-500 shadow-lg shadow-lime-500/70"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default AboutSection;
