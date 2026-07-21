"use client"

import { useEffect, useRef, useState } from "react"

import longevityCardData from "./data/longevityCardData"
import LongevityCard from "./components/Card"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { Swiper as SwiperType } from "swiper"

import "swiper/css"
import { LongevityList } from "./components/LongevityList"
import MobileLongevityList from "./components/LongevitySectionHeader"
import SlideButton from "@/components/ui/Slid Button"

export default function LongevityIndex() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const swiperRef = useRef(null)
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  useEffect(() => {
    if (!swiperRef.current) return

    swiperRef.current.slideTo(0, 0)

    setIsBeginning(true)

    setIsEnd(
      swiperRef.current.slides.length <=
        Number(swiperRef.current.params.slidesPerView)
    )
  }, [selectedIndex])

  return (
    <section className="bg-white py-[65px] lg:py-120 3xl:py-150 md:overflow-hidden">
      <div className="container">
        <div className="flex flex-col xl:flex-row gap-y-8 xl:gap-x-16 gap-y-[15px] sm:gap-y-20 gap-x-8 mb-[30px] sm:mb-60">
          <div className="xl:w-[38%] shrink-0">
            <h1 className="section-heading">LONGEVITY SYSTEMS</h1>
          </div>

          <MobileLongevityList
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
          <div className="flex-1 hidden  md:flex gap-[10px] justify-end sm:gap-[30px] 3xl:gap-[34px] w-fit lg:ml-auto">
            <LongevityList
              items={longevityCardData}
              selectedIndex={selectedIndex}
              onSelect={setSelectedIndex}
            />
          </div>
        </div>
      </div>

      {/* <div className="hidden lg:block"> */}
      <div className=" pl-[max(15px,calc((100vw-1440px)/2+16px))]">
        <Swiper
          key={selectedIndex}
          modules={[Navigation]}

          spaceBetween={15}
          breakpoints={{
            0: {
              slidesPerView: 1.46,
            },
            768: {
              slidesPerView: 2.21,
            },
            1024: {
              slidesPerView: 2.9,
            },
            1920: {
              slidesPerView: 2.5,
            },
          }}

          onSwiper={(swiper) => {
            swiperRef.current = swiper

            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }

            swiper.navigation.init()
            swiper.navigation.update()

            setIsBeginning(swiper.isBeginning)
            setIsEnd(swiper.isEnd)
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning)
            setIsEnd(swiper.isEnd)
          }}
        >
          {longevityCardData[selectedIndex].imageSrc.map((card) => (
            <SwiperSlide key={card.image} className="!h-auto">
              <LongevityCard imageSrc={card.image} title={card.footNote} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* </div> */}
      <div className="flex items-center 2xl:hidden justify-center mt-[10px] gap-[10px] shrink-0">
        <SlideButton
          ref={prevRef}
          direction="prev"
          disabled={isBeginning}
          directionSrc="/icon/left-arrow.svg"
        />
        <SlideButton
          ref={nextRef}
          direction="next"
          disabled={isEnd}
          directionSrc="/icon/right-arrow.svg"
        />
      </div>
    </section>
  )
}
{
  /* <div className="flex flex-col justify-center"> */
}
{
  /* <LongevitySectionHeader
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          /> */
}

{
  /* <div className="hidden md:block mt-15">
              {longevityCardData[selectedIndex].imageSrc.map((card) => (
                <LongevityCard
                  key={card.image}
                  imageSrc={card.image}
                  title={card.footNote}
                />
              ))}
            </div> */
}
{
  /* </div> */
}
