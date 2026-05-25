import Image from "next/image"


export default function Hero() {
  return (
    <section id="hero">
      <div className="flex items-center justify-center gap-4">
        <div className="h-16 w-16 lg:h-24 lg:w-24 overflow-hidden rounded-xl border border-neutral-800">
          <Image
            src="/me.png"
            alt="Profile"
            width={100}
            height={100}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm lg:text-lg text-neutral-200">
            SHREELAXMI HEGDE
          </p>

          <p className="text-sm lg:text-lg text-neutral-500">
            Full Stack Developer
          </p>
        </div>
      </div>
      <p className="mt-10 text-[15px] lg:text-[19px] leading-6 lg:leading-7 text-neutral-400 text-center">
        Building production-grade applications with scalable backend systems,
        deployment workflows and AI-assisted engineering.
      </p>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs tracking-wide text-neutral-500">
        <span>React / Next.js</span>
        <div className="h-1 w-1 rounded-full bg-neutral-700" />
        <span>Node.js</span>
        <div className="h-1 w-1 rounded-full bg-neutral-700" />
        <span>Docker</span>
        <div className="h-1 w-1 rounded-full bg-neutral-700" />
        <span>CI/CD</span>
        <div className="h-1 w-1 rounded-full bg-neutral-700" />
        <span>AWS</span>
      </div>
    </section>
  )
}
