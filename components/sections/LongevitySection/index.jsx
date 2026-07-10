"use client"

import { useRef } from "react"
import LongevityCards from "./components/LongevityCards"
import LongevitySectionHeader from "./components/LongevitySectionHeader"
import Container from "@/components/layout/ContainerLayout"

export default function LongevityIndex() {
  const sectionRef = useRef(null)

  return (
    <section ref={sectionRef} className="relative pt-80 h-[300vh]">
      <div className="sticky top-0 h-screen bg-white">
        <Container>
          <div className="flex h-full flex-col justify-center">
            <LongevitySectionHeader />

            <div>
              <LongevityCards scrollTargetRef={sectionRef} />
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
