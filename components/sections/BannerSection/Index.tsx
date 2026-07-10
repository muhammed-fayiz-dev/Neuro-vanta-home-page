import Image from "next/image"
import { FC } from "react"
import BannerFeature from "./components/BannerFeatures"
import Button from "@/components/ui/Button/Button"

interface BannerProps {
  imageSrc: string
  imageAlt: string

  title: string
  description: string

  features: {
    id: string
    title: string
  }[]
}

const Banner: FC<BannerProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  features,
}) => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-10 lg:px-16 lg:py-14">
        {/* Top Section */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Left */}
          <div className="max-w-2xl">
            <h1 className="text-section font-light uppercase leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/80">
              {description}
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3">
            <Button>EXPLORE</Button>

            <Button>VIEW PRODUCTS</Button>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid gap-8  pt-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <BannerFeature
              key={feature.id}
              id={feature.id}
              title={feature.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Banner
