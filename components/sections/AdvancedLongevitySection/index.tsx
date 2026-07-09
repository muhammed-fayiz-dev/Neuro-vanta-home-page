
import Section from "@/components/layout/SectionLayout"
import { AdvancedLongevityCard } from "./AdvanceLongevity/AdvancedLongevityCard"
import { title, description } from "./AdvanceLongevity/advancedLongevityData"

import Button from "@/components/ui/Button/Button"

export default function AdvancedSection() {
  return (
    <Section className="bg-primary">
      <div className="max-w-7xl">
        {/* Top */}
        <div className="">
          <h2 className="text-xl font-light uppercase leading-tight text-neutral-700 lg:text-5xl">
            {title}
          </h2>

          <p className="mt-8 max-w-xl text-sm leading-7 text-neutral-500">
            {description}
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-24 flex flex-col gap-16 lg:flex-row lg:justify-between">
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
