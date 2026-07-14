"use client"

import Section from "@/components/layout/SectionLayout"
import { choiceData } from "./data/choiceData"
import { ChoiceCard } from "./components/choiceCard"
import { motion, Variants } from "framer-motion"

export const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}
const WhyChooseSection = () => {
  return (
    <Section className="bg-secondary h-sreen pb-0">
      <h2 className="mb-12 text-section font-light uppercase text-extra-dark">
        WHY NEURO VANTA
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className="grid grid-cols-1 border-t border-white md:grid-cols-2 lg:grid-cols-4"
      >
        {choiceData.map((choice) => (
          <ChoiceCard
            key={choice.title}
            icon={choice.icon}
            title={choice.title}
            description={choice.description}
          />
        ))}
      </motion.div>
    </Section>
  )
}

export default WhyChooseSection
