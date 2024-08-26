"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Link,
  Tooltip,
} from "@nextui-org/react";
import React from "react";
import { Image as NextImage } from "@nextui-org/react";
import Reveal from "@/components/utils/Reveal";
import { mapIcon } from "@/components/utils/IconMapper";
import { FiGithub } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";

interface ProjectsProps {
  className?: string;
}

const Projects = ({ className }: ProjectsProps) => {
  const projects = [
    {
      name: "fiardiel's Portfolio",
      description:
        "Self explanatory website. Inspired by the themes of Next.js and from other developers (my friend's) portfolio",
      img: "portfolio.png",
      githubLink: "fiardiel/portfolio/",
      projectLink: "https://fiardiel-portfolio.vercel.app",
      projectType: "Front-end",
      tools: [
        { name: "nextJS", title: "Next.js" },
        { name: "tailwind", title: "Tailwind CSS" },
        { name: "typescript", title: "TypeScript" },
      ],
      isProjectDisabled: false,
      isGithubDisabled: false,
    },
    {
      name: "PT. Samakta Mitra Company Profile",
      description:
        "Created the front-end and back-end of the article page of Samakta Mitra's company profile web page",
      img: "sam-web.png",
      projectLink: "https://beta.onesmartservices.com/articles",
      projectType: "Full-stack",
      githubLink: "fiardiel/sam-web/",
      tools: [
        { name: "vue", title: "Vue" },
        { name: "vite", title: "Vite" },
        { name: "tailwind", title: "Tailwind CSS" },
        { name: "typescript", title: "TypeScript" },
        { name: "python", title: "Python" },
        { name: "directus", title: "Directus" },
      ],
      isProjectDisabled: false,
      isGithubDisabled: true,
    },
    {
      name: "FlexTime",
      description:
        "A rework project, originally by github.com/rice-science. A gym session planning app built for thriving students that want to keep their body in shape",
      img: null,
      githubLink: "fiardiel/flextime-fe/",
      projectType: "Full-stack",
      projectLink: "https://samakta-mitra.vercel.app/",
      tools: [
        { name: "nextJS", title: "Next.js" },
        { name: "tailwind", title: "Tailwind CSS" },
        { name: "typescript", title: "TypeScript" },
        { name: "python", title: "Python" },
      ],
      isProjectDisabled: true,
      isGithubDisabled: false,
    },
  ];

  const fallbackSrc = "/images/fallback.webp";

  return (
    <section id="projects">
      <div
        className={
          "flex flex-col items-center md:items-start w-full " + className
        }
      >
        <Reveal className="text-start w-full">
          <div className="flex items-center">
            <Chip
              color="default"
              size="lg"
              variant="bordered"
              radius="md"
              className="bg-black"
            >
              Projects
            </Chip>
            <div className="relative ml-8 w-full rounded-full md:w-auto md:flex-grow h-0.5 bg-white opacity-20" />
          </div>
        </Reveal>
        <div className="flex flex-col mt-8 gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 w-full items-stretch">
          {projects.map((project, index) => (
            <Reveal key={index} className="flex justify-center items-stretch">
              <div className="w-full h-full">
                <Card
                  radius="sm"
                  className="w-full h-full hover:bg-neutral-900 border-1 border-neutral-700/60 hover:border-neutral-700/70 bg-neutral-950"
                >
                  <CardHeader className="flex flex-col items-start p-0">
                    <div className="w-full aspect-w-16 aspect-h-9">
                      <NextImage
                        removeWrapper
                        className="absolute object-cover w-full h-full rounded-sm rounded-b-none"
                        src={
                          project.img
                            ? `/images/projects/${project.img}`
                            : fallbackSrc
                        }
                        fallbackSrc={fallbackSrc}
                      />
                    </div>
                  </CardHeader>
                  <CardBody className="items-start p-5 pb-0 h-auto">
                    <div className="flex flex-row gap-2 h-[22px]">
                      {project.tools.map((tool, index) => (
                        <Tooltip key={index} content={tool.title}>
                          <div className="h-[25px] w-[25px] text-white">
                            {mapIcon(tool.name, "w-full h-full")}
                          </div>
                        </Tooltip>
                      ))}
                    </div>
                    <div className="flex w-full mt-5 gap-3 justify-start">
                      <p className="text-white transition duration-300 text-xl font-medium leading-7 gap-2">
                        <span className="mr-2">{project.name}</span>
                        <span className="text-primary text-xs inline-flex font-normal border-1 border-primary p-1 px-2 rounded-full">
                          {project.projectType}
                        </span>
                      </p>
                    </div>
                    <p className="mt-2 line-clamp-5 text-neutral-400">
                      {project.description}
                    </p>
                  </CardBody>
                  <CardFooter className="justify-start items-center gap-3 p-5">
                    <div>
                      <Tooltip content="See project">
                        <Button
                          variant="bordered"
                          radius="sm"
                          isDisabled={project.isProjectDisabled}
                          isIconOnly
                          className="bg-transparent hover:border-none group hover:bg-primary"
                          as={Link}
                          href={project.projectLink}
                        >
                          <MdArrowForwardIos
                            className="group-hover:fill-current group-hover:text-white"
                            size={18}
                          />
                        </Button>
                      </Tooltip>
                    </div>
                    <div>
                      <Tooltip content="Project repository">
                        <Button
                          radius="sm"
                          variant="bordered"
                          isDisabled={project.isGithubDisabled}
                          isIconOnly
                          className="group hover:bg-primary hover:border-0"
                          as={Link}
                          href={`https://github.com/${project.githubLink}`}
                        >
                          <FiGithub
                            className="group-hover:fill-white"
                            size={22}
                          />
                        </Button>
                      </Tooltip>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
