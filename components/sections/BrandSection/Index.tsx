import Section from "@/components/layout/SectionLayout";
import { brandIcons } from "./data/brandData";
import  BrandCard  from "./components/BrandCard";

const BrandSection = () => {
  return (
    <Section className="bg-white">
      <div className="grid gap-16">
        {/* Title */}
        <div className="max-w-3xl">
          <h2 className="text-section uppercase text-extra-dark">
            Aligned with World-Class Brands
          </h2>
        </div>

        {/* Brands */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {brandIcons.map((brand, index) => (
            <BrandCard
              key={index}
              icon={brand}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default BrandSection;