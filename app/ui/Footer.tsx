import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { SOCIALS } from "../../lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 relative mx-auto w-[92%] md:w-[50%] lg:w-[38%] pb-40 pt-16">
      <p className="my-4 text-neutral-300">
        Open to backend/product engineering roles and
        Interested in building reliable products with strong engineering teams.
      </p>

      <div className="flex items-center">
        <CiMail className="mr-2" />
        <a
          href={SOCIALS.email}
          className="text-neutral-300 transition-colors hover:text-sky-300"
        >
          shreelaxmihegde9@gmail.com
        </a>
      </div>

      <div className="flex items-center">
        <CiLocationOn className="mr-2" />Karnataka, Bengalore
      </div>

      <p className="mt-5 text-xs tracking-[0.2em] text-neutral-700">
        © 2026 SHREELAXMI HEGDE
      </p>
    </footer>
  )
}