export default function SectionHeading({
  title,
}: {
  title: string
}) {
  return (
    <div className="mb-14 flex items-center gap-4">
      <div className="h-px w-14 bg-sky-400/70" />

      <h2 className="text-sm uppercase tracking-[0.25em] text-neutral-500">
        {title}
      </h2>
    </div>
  )
}