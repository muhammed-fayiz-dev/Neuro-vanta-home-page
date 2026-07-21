import clsx from "clsx"
import Image from "next/image"
import React from "react"
interface Props {
  title: string
  index: number
  activeIndex: number
  onHoverStart: () => void
  onHoverEnd: () => void
}
const SystemsCards: React.FC<Props> = ({
  title,
  index,
  activeIndex,
  onHoverStart,
  onHoverEnd,
}) => {
  const isActive = index == activeIndex
  return (
    <div
      className="group border-b border-[#c9b8a8] cursor-pointer pr-30 xl:pl-30"
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <div
        className={`flex items-center ${isActive ? "px-15 md:px-20 transition-[padding]duration-300 ease-out" : ""} justify-between py-25`}
      >
        <span
          className={`text-30 text-extra-dark tracking-[-0.03em] transition-all duration-300 ${isActive ? "font-semibold" : ""}`}
        >
          {title}
        </span>

        <Image
          width={50}
          height={50}
          src="/icon/arrow-to-top-right.svg"
          alt={title}
          className={clsx(
            "h-[50px] w-auto shrink-0 transition-all duration-300 ease-out",
            isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          )}
        />
      </div>
    </div>
  )
}

export default SystemsCards
