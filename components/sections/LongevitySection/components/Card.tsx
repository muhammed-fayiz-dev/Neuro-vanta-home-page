import Image from "next/image"

interface Props {
  imageSrc: string
  title: string
}

export default function LongevityCard({ imageSrc, title }: Props) {
  return (
    <article className="flex-none w-card-image">
      <div className="group relative w-full aspect-553/550 overflow-hidden rounded-sm">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="553px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div
          className="
        absolute inset-0
        bg-black/50
        opacity-0
        transition-opacity
        duration-300
        group-hover:opacity-100
      "
        />

        {/* Overlay Content */}
        <div
          className="
        absolute inset-0
        flex items-end
        p-6
        opacity-0
        translate-y-4
        transition-all
        duration-300
        group-hover:translate-y-0
        group-hover:opacity-100
      "
        >
       
        </div>
      </div>

      <h3 className="mt-5 text-30 font-light text-neutral-700">{title}</h3>
    </article>
  )
}
