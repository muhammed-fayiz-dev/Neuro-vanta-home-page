import Image from "next/image"

interface Props {
  imageSrc: string
  title: string
}

export default function LongevityCard({ imageSrc, title }: Props) {
  return (
    <article className="w-full">
  <div
    className="
      group
      relative
      w-[clamp(250px,28.8vw,553px)]
    h-[clamp(250px,28.65vw,550px)]
      overflow-hidden
      rounded-sm
    "
  >
    <Image
      src={imageSrc}
      alt={title}
      fill
      // sizes="(max-width: 1024px) 250px, 553px"
      className="
        object-cover
        transition-transform
        duration-500
        group-hover:scale-105
      "
    />

    <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

    <div className="absolute inset-0 flex items-end p-6 opacity-0 translate-y-4 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
  </div>

  <h3 className="mt-4 text-24 font-light text-extra-dark lg:mt-5 lg:text-30">
    {title}
  </h3>
</article>
  )
}
