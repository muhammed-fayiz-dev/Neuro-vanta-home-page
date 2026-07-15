import Section from "@/components/layout/SectionLayout"
import { AdvancedLongevityCard } from "./components/AdvancedLongevityCard"
import { title, description } from "./data/advancedLongevityData"

import Button from "@/components/ui/Button/Button"
import RevealItem from "@/components/animations/RevealItem"

export default function AdvancedSection() {
  return (
    <Section className="bg-primary">
      <div className="max-auto max-w-7xl ">
        {/* Top */}
        <div className="">
          <RevealItem
            trigger="viewport"
            className="text-xl font-light uppercase leading-tight text-neutral-700 lg:text-5xl"
          >
            {title}
          </RevealItem>

          <RevealItem
            trigger="viewport"
            className="mt-8 max-w-xl text-19 leading-7 text-neutral-500"
          >
            {description}
          </RevealItem>
        </div>

        {/* Bottom */}
        <div className="mt-15 flex flex-col gap-16 lg:flex-row lg:justify-between">
          {/* Button */}
          <div className="flex items-end">
            <Button>About Neuro Vanta</Button>
          </div>

          {/* Cards */}
          <AdvancedLongevityCard />
        </div>
      </div>
    </Section>
  )
}
