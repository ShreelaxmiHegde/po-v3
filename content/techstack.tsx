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

export const techstack = [
  {
    title: "Frontend",
    logos: [<RiReactjsLine key={1} />,
    <RiNextjsLine key={2} />,
    <RiTailwindCssLine key={3} />,
    <RiBootstrapLine key={4} />]
  },
  {
    title: "Backend",
    logos: [<RiNodejsLine key={1} />,
    <SiExpress key={2} />]
  },
  {
    title: "Database",
    logos: [<SiMongodb key={1} />,
    <SiPostgresql key={2} />]
  },
  {
    title: "Infrastructure",
    logos: [<FaDocker key={1} />,
    <FaAws key={2} />,
    <SiVercel key={3} />,
    <SiRender key={4} />]
  },
  {
    title: "Language",
    logos: [
      <SiJavascript key={1} />,
      <SiPython key={2} />,
      <SiTypescript key={3} />
    ]
  }
]