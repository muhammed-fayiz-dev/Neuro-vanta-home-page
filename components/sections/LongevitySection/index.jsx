"use client"

import { useState } from "react"
import Section from "@/components/layout/SectionLayout"
import LongevityCards from "./components/LongevityCards"
import LongevitySectionHeader from "./components/LongevitySectionHeader"
import MobileLongevityCarousel from "./components/MobileLongevityCarousel"
import longevityCardData from "./data/longevityCardData"

export default function LongevityIndex() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <Section>
      <div className="bg-white">
        <div className="flex flex-col justify-center">
          <LongevitySectionHeader
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />

          <div className="hidden md:block mt-15">
            <LongevityCards indexId={selectedIndex} />
          </div>

          <MobileLongevityCarousel
            images={longevityCardData[selectedIndex].imageSrc}
          />
        </div>
      </div>
    </Section>
  )
}
