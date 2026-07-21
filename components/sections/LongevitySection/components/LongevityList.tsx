import Image from "next/image"
import { LongevityCardDataType } from "../data/longevityCardData"
import clsx from "clsx"

interface LongevityListProps {
  items: LongevityCardDataType[]
  selectedIndex: number
  onSelect: (index: number) => void
}

export function LongevityList({
  items,
  selectedIndex,
  onSelect,
}: LongevityListProps) {
  return (
    <ul className="hidden md:grid md:grid-cols-2 gap-x-[30px] 3xl:gap-x-[34px]">
      {items.map((category, index) => {
        const active = selectedIndex === index
        return (
          <div key={category.id}>
            <li>
              <button
                className="group w-full text-left bg-none border-b border-[#cbc3bb] border-0.5 cursor-pointer"
                onClick={() => onSelect(index)}
              >
                <div className="flex items-center gap-[6px] justify-between relative overflow-hidden max-h-[49px]">
                  <span
                    className={clsx(
                      "absolute inset-0 transition-opacity duration-300",
                      active
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    )}
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(224, 224, 224, 0) 0%, rgb(224, 224, 224) 48.56%, rgba(224, 224, 224, 0) 100%); width: 100%",
                    }}
                  ></span>
                  <span className="contact-link relative z-10 text-19 leading-[2.3] 2xl:leading-[2.631578947368421] tracking-[-0.03em] transition-colors duration-300 text-extra-dark">
                    {category.title}
                  </span>
                  <div className="relative z-10">
                    <Image
                      src={"/icon/arrow-to-top-right.svg"}
                      alt="arrow-to-top-right"
                      className={clsx(
                        "relative z-10 h-[22px] w-auto transition-all duration-300",
                        active
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                      )}
                      width={13}
                      height={13}
                    />
                  </div>
                </div>
                
              </button>
            </li>
          </div>
        )
      })}
    </ul>
  )
}
