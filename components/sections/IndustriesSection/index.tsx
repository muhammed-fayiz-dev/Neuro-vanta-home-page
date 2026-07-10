import Section from "@/components/layout/SectionLayout"
import { industriesData } from "./data/industriesData"
import IndustriesCard from "./components/IndustriesCard"
import Image from "next/image"


const IndustriesSection=()=> {
  return (
    <Section className="bg-primary">
      <div className="grid gap-16 lg:grid-cols-[320px_1fr] lg:items-end">
        {/* Left */}
        <div className="flex justify-center lg:justify-start lg:items-end">
          <Image
            src="/icon/clinic.svg"
            alt="Clinic"
            width={320}
            height={320}
            className="h-auto pb-10 w-45 md:w-60 lg:w-xs"
          />
        </div>

        {/* Right */}
        <div>
          <h2 className="mb-12 max-w-4xl text-section uppercase text-extra-dark">
            Elevating Wellness Across Industries
          </h2>

          <div>
            {industriesData.map((item, index) => (
              <IndustriesCard key={index} title={item} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
export default IndustriesSection
