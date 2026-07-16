import Section from "@/components/layout/SectionLayout"
import { AdvancedLongevityCard } from "./components/AdvancedLongevityCard"
import { title, description } from "./data/advancedLongevityData"

import Button from "@/components/ui/Button/Button"
import RevealItem from "@/components/animations/RevealItem"

export default function AdvancedSection() {
  return (
    <Section className="bg-primary">
      <div className=" ">
        {/* Top */}
        <div className="max-w-8xl">
          <RevealItem
            trigger="viewport"
            className="section-heading"
          >
            {title}
          </RevealItem>

          <RevealItem
            trigger="viewport"
            className="mt-8 max-w-2xl description-text"
          >
            {description}
          </RevealItem>
        </div>

        {/* Bottom */}
        <div className="mt-15 flex flex-col gap-16 lg:flex-row lg:justify-between">
          {/* Button */}
          <div className="flex items-end">
            <Button theme="dark">About Neuro Vanta</Button>
          </div>

          {/* Cards */}
          <AdvancedLongevityCard />
        </div>
      </div>
    </Section>
  )
}
