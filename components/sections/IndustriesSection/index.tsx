"use client"
import { industriesData, IndustriesDataProps } from "./data/industriesData"
import IndustriesCard from "./components/IndustriesCard"
import RevealItem from "@/components/animations/RevealItem"
import SystemsCards from "./components/SystemsCards"
import Image from "next/image"
import { useEffect, useState } from "react"

const IndustriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    if (hoveredIndex !== null) return

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industriesData.length)
    }, 3000)

    return () => clearInterval(id)
  }, [hoveredIndex])
  const activeData = industriesData[hoveredIndex ?? activeIndex]
  return (
    <section className="bg-primary overflow-hidden py-[60px] lg:py-120 3xl:py-[177px]">
      <div className="container">
        <div
          className="
        grid
        xl:grid-cols-[360px_minmax(0,1fr)]
        items-center
        gap-x-[90px]
        3xl:grid-cols-[420px_minmax(0,1fr)]
        3xl:gap-x-[140px]
      "
        >
          {/* Empty column so heading starts with right content */}
          <div className="hidden xl:block" />

          <RevealItem
            trigger="viewport"
            className="text-section text-extra-dark mb-16 lg:mb-60"
          >
            A SYSTEM FOR EVERY SPACE
          </RevealItem>

          {/* Left Illustration */}
          <div className="hidden xl:flex justify-center items-center">
            <Image
              src={activeData.icon}
              width={380}
              height={380}
              alt={activeData.title}
              className="w-auto h-[300px] 3xl:h-[360px]"
            />
          </div>

          {/* Right List */}
          <div>
            <ul className="hidden xl:block border-t border-[#c9b8a8]">
              {industriesData.map((item, index) => (
                <SystemsCards
                  key={item.title}
                  title={item.title}
                  index={index}
                  activeIndex={hoveredIndex ?? activeIndex}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                />
              ))}
            </ul>

            <RevealItem trigger="viewport">
              <ul className="xl:hidden border-t border-border-color">
                {industriesData.map((item, index) => (
                  <IndustriesCard
                    key={index}
                    title={item.title}
                    icon={item.icon}
                    index={index}
                    activeIndex={activeIndex}
                  />
                ))}
              </ul>
            </RevealItem>
          </div>
        </div>
      </div>
    </section>
  )
}
export default IndustriesSection
