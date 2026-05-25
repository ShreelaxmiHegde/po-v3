"use client"

import {
  ArrowUp,
  FolderGit2,
} from "lucide-react"

import {
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri"
import { SOCIALS } from "../../lib/constants"

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">

      <div
        className="
          flex items-center gap-1
          rounded-2xl
          border border-neutral-800/80
          bg-neutral-950/80
          px-2 py-2
          shadow-[0_0_30px_rgba(0,0,0,0.45)]
          backdrop-blur-xl
        "
      >

        <NavItem href="#projects">
          <FolderGit2 size={18} />
        </NavItem>

        <Divider />

        <NavItem href={SOCIALS.github}>
          <RiGithubLine size={18} />
        </NavItem>

        <NavItem href={SOCIALS.linkedin}>
          <RiLinkedinLine size={18} />
        </NavItem>

        <Divider />

        <button
          onClick={scrollToTop}
          className="
            p-3
            text-neutral-500
            hover:text-neutral-300
            transition-transform duration-300 hover:-translate-y-0.5
          "
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </nav>
  )
}

function NavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel="noreferrer"
      className="
        group
        rounded-xl
        border border-transparent
        p-3
        text-neutral-500
        hover:text-neutral-300
      "
    >
      <div className="transition-transform duration-300 group-hover:-translate-y-0.5">
        {children}
      </div>
    </a>
  )
}

function Divider() {
  return (
    <div className="mx-1 h-5 w-px bg-neutral-800" />
  )
}