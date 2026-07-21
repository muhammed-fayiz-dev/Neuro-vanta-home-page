
import Image from "next/image"

interface Props {
  title: string
  icon: string
  activeIndex: number
  index: number
}

const IndustriesCard: React.FC<Props> = ({
  title,
  icon,
  activeIndex,
  index,
}) => {
  const isActive = index == activeIndex
  return (
    <div className="opacity: 1; transform: none">
      <li className="border-b border-border-color">
        <a>
          <div className="flex items-center justify-between py-[31px] h-[96px] sm:h-auto">
            <div className="flex items-center gap-[30px] sm:gap-80">
              <Image
                src={icon}
                alt={icon}
                width={32}
                height={32}
                className="w-[32px] h-[32px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px] object-contain shrink-0"
              />
              <span
                className={` text-30 text-extra-dark  tracking-[-0.03em] max-w-[222px] md:max-w-full ${isActive ? "text-dark" : ""} `}
              >
                {title}
              </span>
            </div>
            <div className="w-[34px] h-[34px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px]  rounded-full bg-primary flex items-center justify-center shrink-0">
              <Image
                src="/icon/circle-arrow-right.svg"
                alt=""
                width={14}
                height={14}
                className="
          hidden
          lg:block
          w-[14px] sm:w-[16px] md:w-[18px] h-auto -rotate-90
        "
              />
            </div>
          </div>
        </a>
      </li>

      {/* <Image
        className="lg:hidden"
        src={"/icon/circle-arrow-right.svg"}
        alt=""
        width={34}
        height={34}
        /> */}
    </div>
  )
}

export default IndustriesCard
