"use client";

import { useRef } from "react";
import Section from "@/components/layout/SectionLayout";
import { brandIcons } from "./data/brandData";
import BrandCard from "./components/BrandCard";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealItem from "@/components/animations/RevealItem";

const BrandSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <Section className="bg-white">
      <div ref={ref} className="grid gap-16">
        <div className="max-w-3xl">
          <RevealItem className="text-section uppercase text-extra-dark">
            Aligned with World-Class Brands
          </RevealItem>
        </div>

        <motion.div
          style={{ y }}
          className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5"
        >
          {brandIcons.map((brand, index) => (
            <BrandCard
              key={index}
              icon={brand}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default BrandSection;