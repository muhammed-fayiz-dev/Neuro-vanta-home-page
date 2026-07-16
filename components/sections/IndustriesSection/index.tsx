import Section from "@/components/layout/SectionLayout"
import { industriesData } from "./data/industriesData"
import IndustriesCard from "./components/IndustriesCard"
import HospitalIcon from "@/public/icon/system spaces/HospitalIcon"
import RevealItem from "@/components/animations/RevealItem"

const IndustriesSection = () => {
  return (
    <Section className="bg-primary">
      <div className="flex justify-between">
        <div className="hidden md:flex items-center">
          <HospitalIcon />
        </div>

        <div className="flex flex-col justify-between gap-10">
          <RevealItem
            trigger="viewport"
            className="mb-12 max-w-4xl section-heading"
          >
            Elevating Wellness Across Industries
          </RevealItem>
          <div className="">
            {industriesData.map((item, index) => (
              <RevealItem trigger="scroll" key={index}>
                <IndustriesCard
                  key={index}
                  title={item.title}
                  icon={item.icon}
                />
              </RevealItem>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
export default IndustriesSection
