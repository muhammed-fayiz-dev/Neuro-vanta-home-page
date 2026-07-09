import Image from "next/image";

interface Props {
  imageSrc: string;
  title: string;
}

export default function LongevityCard({
  imageSrc,
  title,
}: Props) {
  return (
    <article className="w-[min(78vw,21.25rem)] shrink-0">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <h3 className="mt-5 text-[22px] font-light text-neutral-700">
        {title}
      </h3>
    </article>
  );
}
