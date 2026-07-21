"use client"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import longevityCardData, {
  LongevityCardDataType,
} from "../data/longevityCardData"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LongevityHeaderProps {
  selectedIndex: number
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
}

const MobileLongevityList: React.FC<LongevityHeaderProps> = ({
  selectedIndex,
  setSelectedIndex,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClick)

    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <div ref={ref} className="relative md:hidden mb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
      flex
      w-full
      items-center
      justify-between
      rounded-sm
      // py-[15px]
      border-t
      border-b
      border-[#D7D7D7]
    "
      >
        <span className=" text-19 text-extra-dark ">
          {longevityCardData[selectedIndex].title}
        </span>

        <ChevronDown
          width={30}
          height={30}
          className={` text-extra-dark ptransition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
              scaleY: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scaleY: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scaleY: 0.95,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="
          absolute
          left-0
          right-0
          top-full
          z-50
          mt-3
          origin-top
          rounded-sm
          bg-white
          shadow-xl
          border
          border-neutral-200
          overflow-hidden
        "
          >
            {longevityCardData.map((category, index) => {
              if (index === selectedIndex) return null

              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedIndex(index)
                    setIsOpen(false)
                  }}
                  className="
                flex
                w-full
                items-center
                border-b
                border-[#D7D7D7]
                px-5
               py-4
                text-left
                text-extra-dark
                hover:bg-neutral-50
              "
                >
                  {category.title}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileLongevityList
