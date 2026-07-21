"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

import RevealItem from "@/components/animations/RevealItem"
import BrandCard from "./components/BrandCard"
import { brandIcons } from "./data/brandData"

const BrandSection = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [200, -200])

  return (
    <section className="relative overflow-hidden bg-white pt-[65px] pb-[65px] lg:pt-90 lg:pb-120 3xl:pt-[94px] 3xl:pb-150">
      <div className="container">
        <RevealItem className="section-heading mb-[15px] max-w-[21ch] sm:mb-20 md:mb-50">
          Aligned with World-Class Brands
        </RevealItem>

        {/* Mobile & Tablet */}
        <div className="group overflow-hidden xl:hidden">
          <div
            className="
              flex
              w-max
              gap-[10px]
              sm:gap-5
              [animation:brand-marquee_20s_linear_infinite]
              group-hover:[animation-play-state:paused]
            "
          >
            {[...brandIcons, ...brandIcons].map((icon, index) => (
              <BrandCard key={index} icon={icon} />
            ))}
          </div>
        </div>

        {/* Desktop */}
        <motion.div
          ref={ref}
          style={{ y }}
          className="hidden xl:flex xl:flex-col gap-[20px]"
        >
          {/* Row 1 */}
          {/* <RevealItem trigger="viewport"> */}
            <div className="flex justify-end gap-[20px]">
              {brandIcons.slice(0, 3).map((icon, index) => (
                <BrandCard key={index} icon={icon} />
              ))}
            </div>
          {/* </RevealItem> */}

          {/* Row 2 */}
          {/* <RevealItem trigger="viewport"> */}
            <div className="flex gap-[20px]">
              {brandIcons.slice(3, 6).map((icon, index) => (
                <BrandCard key={index} icon={icon} />
              ))}
            </div>
          {/* </RevealItem> */}

          {/* Row 3 */}
          {/* <RevealItem trigger="viewport"> */}
            <div className="flex justify-between">
              <BrandCard icon={brandIcons[6]} />

              <div className="flex gap-[20px]">
                <BrandCard icon={brandIcons[7]} />
                <BrandCard icon={brandIcons[8]} />
              </div>
            </div>
          {/* </RevealItem> */}
        </motion.div>
      </div>
    </section>
  )
}

export default BrandSection
