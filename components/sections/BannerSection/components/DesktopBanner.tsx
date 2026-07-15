import React from "react"
import BannerFeature from "./BannerFeatures"
import Button from "@/components/ui/Button/Button"
import { DesktopBannerProps } from "../type"
import RevealItemProps from "@/components/animations/RevealItem"

export const DesktopBanner: React.FC<DesktopBannerProps> = ({
  title,
  description,
  features,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <div className="relative z-10 hidden min-h-screen flex-col justify-between px-6 py-10 lg:flex lg:px-16 lg:py-14">
      {/* Top Section */}
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        {/* Left */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <RevealItemProps
            trigger="viewport"
            className="text-section  font-light uppercase leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            {title}
          </RevealItemProps>

          <RevealItemProps
            trigger="viewport"
            className=" max-w-lg text-19 leading-7 text-white/80"
          >
            {description}
          </RevealItemProps>
        </div>

        {/* Right */}
        <div className="flex flex-col items-end gap-3">
          <Button>EXPLORE</Button>

          <Button>VIEW PRODUCTS</Button>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="grid gap-8  pt-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <RevealItemProps trigger="viewport" key={feature.id}>
            <BannerFeature
              key={feature.id}
              id={feature.id}
              title={feature.title}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          </RevealItemProps>
        ))}
      </div>
    </div>
  )
}
