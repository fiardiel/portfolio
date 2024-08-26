"use client";

import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Reveal from "@/components/utils/Reveal";
import { FrontendIcon } from "@/components/icons/FrontendIcon";
import DataScienceIcon from "@/components/icons/DataScienceIcon";
import { mapIcon } from "@/components/utils/IconMapper";
import { Chip, Tooltip } from "@nextui-org/react";
import Marquee from "react-fast-marquee";

interface SkillsProps {
  className?: string;
}

const Skills = ({ className }: SkillsProps) => {
  const skills = [
    {
      title: "Full-stack ",
      description:
        "I am experienced in building responsive and interactive web applications using modern web   technologies. I am experienced in building responsive and interactive web applications using modern techologies, including RESTful APIs and backends using various frameworks and languages, including CMS.",
      logo: (
        <FrontendIcon className="h-[150px] text-neutral-400 fill-neutral-400 translate-x-1" />
      ),
    },
    {
      title: "Data ",
      description:
        "I've done several machine learning tasks, including natural language processing, classification, and clustering. I've handled multiple datasets starting from synthetically generated tweets to Knowledge Graph of Wikidata using several python libraries.",
      icons: [
        "python",
        "postgresql",
        "pandas",
        "numpy",
        "seaborn",
        "scikitlearn",
      ],
      logo: (
        <DataScienceIcon className="h-[150px] text-neutral-400 fill-neutral-400" />
      ),
    },
  ];

  const techStacks = [
    { name: "nextJS", title: "Next.js" },
    { name: "react", title: "React" },
    { name: "tailwind", title: "Tailwind CSS" },
    { name: "typescript", title: "TypeScript" },
    { name: "vue", title: "Vue" },
    { name: "vite", title: "Vite" },
    { name: "python", title: "Python" },
    { name: "postgresql", title: "PostgreSQL" },
    { name: "golang", title: "Golang" },
    { name: "java", title: "Java" },
    { name: "springboot", title: "Spring Boot" },
    { name: "directus", title: "Directus" },
    { name: "django", title: "Django" },
    { name: "pandas", title: "Pandas" },
    { name: "numpy", title: "Numpy" },
    { name: "seaborn", title: "Seaborn" },
    { name: "scikitlearn", title: "Scikit-learn" },
  ];

  return (
    <section className="w-full lg:w-[1024px] md:px-6" id="skills">
      <div
        className={`flex flex-col w-full items-center md:items-start ${className}`}
      >
        <div className="mt-5 w-full">
          <Reveal>
            <div className="flex items-center">
              <Chip
                color="default"
                size="lg"
                variant="bordered"
                radius="md"
                className="bg-black"
              >
                Tech Stack
              </Chip>
              <div className="relative ml-8 w-full rounded-full md:w-auto md:flex-grow h-0.5 bg-white opacity-20" />
            </div>
            <Card className="w-full p-4 bg-neutral-950 border border-neutral-800/70 mt-5 hover:bg-neutral-900">
              <CardBody>
                <Marquee className="min-w-[100%]" pauseOnClick speed={70}>
                  {techStacks.map((tech, index) => (
                    <div
                      key={index}
                      className="p-3 mx-3 bg-neutral-600/10 backdrop-blur-lg border border-neutral-800/80 rounded-xl"
                    >
                      <Tooltip content={tech.title}>
                        <div className="h-[30px] w-[30px] text-white">
                          {mapIcon(tech.name, "w-full h-full")}
                        </div>
                      </Tooltip>
                    </div>
                  ))}
                </Marquee>
              </CardBody>
            </Card>
          </Reveal>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-5 items-stretch mt-5">
          {skills.map((skill, index) => (
            <Reveal key={index} className="">
              <Card
                radius="sm"
                className="w-full h-full p-3 border-1 border-neutral-700/60 hover:border-neutral-700/70 bg-neutral-950 hover:bg-neutral-900 group"
              >
                <div className="flex absolute top-7 pl-4 gap-2">
                  <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                  <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                </div>
                <CardHeader className="justify-center mt-5">
                  <div className="flex flex-col items-center space-y-3">
                    {skill.logo}
                    <p className="text-xl text-center text-primary-600 group-hover:text-primary font-medium transition duration-200">
                      {skill.title}{" "}
                      <span className="text-white font-normal">
                        Engineering
                      </span>
                    </p>
                  </div>
                </CardHeader>
                <CardBody className="pt-0 items-center">
                  <div className="flex flex-col items-center">
                    <p className="transition text-sm text-neutral-500 group-hover:text-neutral-400 text-center">
                      {skill.description}
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
