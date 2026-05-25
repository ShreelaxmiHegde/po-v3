import SectionHeading from "../ui/SectionHeading";
import { techstack } from "../../content/techstack";


export default function TechStack() {
  return (
    <section id="techstack" className="mt-15">
      <SectionHeading title="Tech Stack" />

      <div className="space-y-5">
        {techstack.map((t, idx) => (
          <StackGroup key={idx} title={t.title} items={t.logos} />
        ))}
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
  )
}