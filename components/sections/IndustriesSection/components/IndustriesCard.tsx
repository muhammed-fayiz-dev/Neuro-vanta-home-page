import Image from "next/image";

interface Props {
  title: string;
  icon:string

}

const IndustriesCard:React.FC<Props>=({ title ,icon })=> {
  return (
    <article
      className="
        group
        flex
        items-center
        justify-between
        border-t
        border-border-default
        py-6
        transition-colors
        duration-300
      "
    >
      <div className="md:hidden">
        <Image  src={icon} alt={icon} width={32} height={32}/>
      </div>
      <h3
        className="
          text-lg
          text-extra-dark
          transition-colors
          duration-300
          group-hover:text-dark
        "
      >
        {title}
      </h3>
      <Image
        src="/icon/arrow-to-top-right.svg"
        alt=""
        width={28}
        height={28}
        className="
          md:block
          opacity-0
          -translate-x-2
          transition-all
          duration-300
          group-hover:translate-x-0
          group-hover:opacity-100
        " 
      />
      <Image className="md:hidden" src={"/icon/circle-arrow-right.svg"} alt="" width={34} height={34}/>
    </article>
  );
}

export default IndustriesCard