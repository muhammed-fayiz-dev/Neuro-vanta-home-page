import Image from "next/image"

interface Props {
  imageSrc: string
  title: string
}

export default function LongevityCard({ imageSrc, title }: Props) {
  return (
    <article className="group relative overflow-hidden">
      <div className=" relative overflow-hidden h-[250px] sm:h-[320px] lg:h-[420px] 3xl:h-[550px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="
        object-cover transition-transform duration-500 group-hover:scale-105
      "
          // style={{position: "absolute; height: 100%; width: 100%; inset: 0px; color: transparent"}}
        />

        <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute top-20 right-20
            sm:top-30 sm:right-30
            3xl:top-[34px] 3xl:right-[34px]

            opacity-0
            translate-x-4
            -translate-y-4

            transition-all
            duration-500
            ease-out

            group-hover:opacity-100
            group-hover:translate-x-0
            group-hover:translate-y-0">
          <Image
            src={"/icon/arrow-to-top-right.svg"}
            alt="arrow-to-top-right"
            width={200}
            height={200}
            className="hidden h-[40px] w-[40px] object-contain xl:block md:h-[50px] xl:h-[80px] sm:w-auto"
          />
        </div>
      </div>

      <div className="overflow-hidden">
        <p className="text-30 font-light text-extra-dark tracking-[-0.03em] lg:mt-5 lg:text-30">
          {title}
        </p>
      </div>
    </article>
  )
}
