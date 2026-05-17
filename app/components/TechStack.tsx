import { FaDocker, FaAws } from "react-icons/fa";
import {
  RiReactjsLine,
  RiNextjsLine,
  RiTailwindCssLine,
  RiNodejsLine,
  RiBootstrapLine,
} from "react-icons/ri";

import {
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiRender,
  SiJavascript,
  SiPython,
} from "react-icons/si";

import SectionHeading from "../shared/SectionHeading";


export default function TechStack() {
  return (
    <section className="mt-15">
      <SectionHeading title="Tech Stack" />

      <div className="space-y-5">
        <div className="space-y-7">
          <StackGroup
            title="Frontend"
            items={[
              <RiReactjsLine key={1} />,
              <RiNextjsLine key={2} />,
              <RiTailwindCssLine key={3} />,
              <RiBootstrapLine key={4} />,

            ]}
          />

          <StackGroup
            title="Backend"
            items={[
              <RiNodejsLine key={1} />,
              <SiExpress key={2} />,
            ]}
          />

          <StackGroup
            title="Database"
            items={[
              <SiMongodb key={1} />,
              <SiPostgresql key={2} />,
            ]}
          />

          <StackGroup
            title="Infrastructure"
            items={[
              <FaDocker key={1} />,
              <FaAws key={2} />,
              <SiVercel key={3} />,
              <SiRender key={4} />,
            ]}
          />

          <StackGroup
            title="Language"
            items={[
              <SiJavascript key={1} />,
              <SiPython key={2} />,
              <SiTypescript key={3} />
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function StackGroup({
  title,
  items,
}: {
  title: string
  items: React.ReactNode[]
}) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-4">

        <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
          {title}
        </p>
        <div className="h-px w-4 bg-sky-400/50" />
        <div className="flex flex-wrap items-center gap-x-5 gap-y-5 text-[16px] text-neutral-500 md:gap-x-7 md:text-[24px]">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="transition-colors hover:text-neutral-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}