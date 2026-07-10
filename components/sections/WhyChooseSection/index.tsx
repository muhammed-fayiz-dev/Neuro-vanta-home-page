import Section from "@/components/layout/SectionLayout";
import { choiceData } from "./data/choiceData";
import { ChoiceCard } from "./components/choiceCard";

const WhyChooseSection=()=> {
  return (
    <Section className="bg-secondary">
        
      <h2 className="mb-12 text-section font-light uppercase text-extra-dark">
        WHY NEURO VANTA
      </h2>

      <div className="grid grid-cols-1 border-t border-white md:grid-cols-2 lg:grid-cols-4">
        {choiceData.map((choice) => (
          <ChoiceCard
            key={choice.title}
            icon={choice.icon}
            title={choice.title}
            description={choice.description}
          />
        ))}
      </div>
    </Section>
  );
}

export default WhyChooseSection