import Image from "next/image";

interface Props {
  icon: string;
  index: number;
}

const BrandCard = ({ icon, index }: Props) => {
  return (
    <article
      className={`
        flex aspect-[1.3/1] items-center justify-center
        border border-border-muted
        bg-white
        p-8
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-md

        
      `}
    >
      <Image
        src={icon}
        alt="Brand logo"
        width={140}
        height={60}
        className="h-auto w-full object-contain grayscale transition duration-300 hover:grayscale-0"
      />
    </article>
  );
};


export default BrandCard