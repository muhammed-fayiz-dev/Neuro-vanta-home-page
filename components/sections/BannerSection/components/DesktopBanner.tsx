import React from "react"
import BannerFeature from "./BannerFeatures"
import Button from "@/components/ui/Button/Button"
import { DesktopBannerProps } from "../type"
import RevealItemProps from "@/components/animations/RevealItem"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"

export const DesktopBanner: React.FC<DesktopBannerProps> = ({
  title,
  description,
  features,
  activeIndex,
  setActiveIndex,
  
  descriptionMax_w=65,
}) => {
  return (
    <div className=" h-full flex flex-col justify-between py-section ">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-[15px] sm:gap-20 ">
          <RevealItemProps
            trigger="viewport"
            className="section-heading text-white max-w-[25ch]"
          >
            {title}
          </RevealItemProps>

          <RevealItemProps
            trigger="viewport"
            className={` mb-[30px`}
          >
            <p  className={`description-text text-white/80  leading-[1.52] max-w-[60ch] ${descriptionMax_w}`}>
            {description}
            </p>
          </RevealItemProps>
        </div>

        <div className="flex  lg:flex lg:flex-col pt-2 lg:justify-center lg:items-end gap-5 ">
          <Button>EXPLORE</Button>

          <Button>VIEW PRODUCTS</Button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-0 right-0 flex items-end justify-between pt-8 md:hidden">
          <span className="rounded-full bg-white/70 px-2 py-1 text-sm text-extra-dark">
            {String(activeIndex + 1).padStart(2, "0")}/
            {String(features.length).padStart(2, "0")}
          </span>
        </div>
        <Swiper
          modules={[Autoplay]}
          loop
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
          }}
          className="w-full pt-8"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={feature.id}>
              <RevealItemProps trigger="viewport">
                <BannerFeature
                  id={feature.id}
                  title={feature.title}
                  active={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                />
              </RevealItemProps>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
