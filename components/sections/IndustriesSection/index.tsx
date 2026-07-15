import Section from "@/components/layout/SectionLayout"
import { industriesData } from "./data/industriesData"
import IndustriesCard from "./components/IndustriesCard"
import HospitalIcon from "@/public/icon/system spaces/HospitalIcon"
import RevealItem from "@/components/animations/RevealItem"


const IndustriesSection = () => {
  return (
    <Section className="bg-primary">
      <div className="grid gap-16 lg:grid-cols-[320px_1fr] lg:items-end">
        {/* Left */}
        <div className="hidden md:flex justify-center lg:justify-start lg:items-end">
         
          <HospitalIcon />
        </div>

        {/* Right */}
        <div>
          <RevealItem
            trigger="viewport"
            className="mb-12 max-w-4xl text-section uppercase text-extra-dark"
          >
            Elevating Wellness Across Industries
          </RevealItem>

          <div>
            {industriesData.map((item, index) => (
              <RevealItem trigger="scroll" key={index}>
                <IndustriesCard key={index} title={item.title} icon={item.icon} />
              </RevealItem>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
export default IndustriesSection
