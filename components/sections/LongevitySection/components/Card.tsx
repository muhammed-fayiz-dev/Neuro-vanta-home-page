import Image from "next/image"

interface Props {
  imageSrc: string
  title: string
}

export default function LongevityCard({ imageSrc, title }: Props) {
  return (
    <article
      className="flex-none
w-72
md:w-80
lg:w-85"
    >
      <div className="relative aspect-4/5 overflow-hidden rounded-sm">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <h3 className="mt-3 md:mt-5 mb-5 text-button font-light text-neutral-700">{title}</h3>
    </article>
  )
}
