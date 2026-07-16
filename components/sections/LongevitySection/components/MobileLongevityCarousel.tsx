"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperType } from "swiper/types"
import { ArrowLeft, ArrowRight } from "lucide-react"

import "swiper/css"

import LongevityCard from "./Card"
import { ImageData } from "../data/longevityCardData"

interface Props {
  images: ImageData[]
}

export default function MobileLongevitySwiper({ images }: Props) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)

  return (
    <div className="md:hidden mt-7">
      <Swiper
        key={images.map((item) => item.image).join("-")}
        onSwiper={setSwiper}
        slidesPerView={1.15}
        // loop={images.length > 1}
      >
        {images.map((item) => (
          <SwiperSlide key={item.image}>
            {({ isActive }) => (
              <div
                className={`
                  transition-all
                  duration-500
                  ${
                    isActive
                      ? "scale-100 opacity-100"
                      : "scale-90 opacity-50"
                  }
                `}
              >
                <LongevityCard
                  imageSrc={item.image}
                  title={item.footNote}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      {images.length > 1 && (
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => swiper?.slidePrev()}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-[#5C5047]
              text-white
              transition-colors
              hover:bg-[#4B4038]
            "
          >
            <ArrowLeft size={20} strokeWidth={1.8} />
          </button>

          <button
            onClick={() => swiper?.slideNext()}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-[#5C5047]
              text-white
              transition-colors
              hover:bg-[#4B4038]
            "
          >
            <ArrowRight size={20} strokeWidth={1.8} />
          </button>
        </div>
      )}
    </div>
  )
}