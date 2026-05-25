"use client"

import { useState } from "react";

import SectionHeading from "../ui/SectionHeading";
import { projects } from "../../content/projects";
import { FiGithub } from "react-icons/fi";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { HiOutlineChevronDown } from "react-icons/hi";

export default function Projects() {
  return (
    <section id="projects" className="mt-15">
      <SectionHeading title="Selected Works" />

      <div className="space-y-5">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>

      <p className="mt-4 max-w-2xl leading-5 text-[15px] text-neutral-400">I also built a Chrome Extension which stores clipboard histories and allows to retrieve them. <u><a href="https://github.com/ShreelaxmiHegde/Clipboard-manager" className="text-sky-400/70">link</a></u></p>
    </section>
  )
}

function ProjectCard({
  project,
}: {
  project: {
    name: string
    type: string
    github: string
    demo: string
    stack: string[]
    desc: string
    details: string[]
  }
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className="border-b border-neutral-900 pb-10">
      {/* header */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-[10px] lg:text-xs uppercase tracking-[0.25em] text-neutral-500">
            {project.type}
          </p>

          <h3 className="mt-2 text-xl font-medium text-neutral-100">
            {project.name}
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <ProjectIcon
            href={project.github}
            icon={<FiGithub size={17} />}
          />

          <ProjectIcon
            href={project.demo}
            icon={<LuSquareArrowOutUpRight size={17} />}
          />
        </div>
      </div>

      {/* stack */}
      <div className="flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="text-sm text-neutral-400 mt-2"
          >
            {item}
          </span>
        ))}
      </div>

      {/* desc */}
      <p className="mt-3 max-w-2xl leading-5 text-[15px] text-neutral-400">
        {project.desc}
      </p>

      {/* expandable section */}
      <div
        className={`grid transition-all duration-300 ${expanded
          ? "mt-5 grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr] opacity-70"
          }`}
      >
        <div className="overflow-hidden">
          <div className="border-l border-neutral-800 pl-5">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-neutral-500">
              Implementation
            </p>

            <ul>
              {project.details.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-neutral-300"
                >
                  <div className="mt-3 h-px w-4 shrink-0 bg-sky-400/70" />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 flex cursor-pointer items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-200"
      >
        <span>
          {expanded ? "Show less" : "Show implementation"}
        </span>

        <HiOutlineChevronDown
          className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""
            }`}
        />
      </button>
    </article>
  )
}

function ProjectIcon({
  href,
  icon,
}: {
  href: string
  icon: React.ReactNode
}) {
  return (
    <a
      href={href}
      className="rounded-xl border border-neutral-800 p-3 text-neutral-400 transition-colors hover:border-sky-400/20 hover:text-sky-300"
    >
      {icon}
    </a>
  )
}