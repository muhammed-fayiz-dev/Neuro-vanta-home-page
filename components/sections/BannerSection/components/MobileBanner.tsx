import Button from "@/components/ui/Button/Button"
import { Feature } from "../data/bannerData"

interface MobileBannerProps {
  title: string
  description: string
  features: Feature[]
  activeIndex: number
}

const MobileBanner: React.FC<MobileBannerProps> = ({
  title,
  description,
  features,
  activeIndex,
}) => {
  const activeFeature = features[activeIndex]
  return (
    <div className="relative flex min-h-screen flex-col px-6 py-10 lg:hidden">
      {/* Header */}
      <div className="space-y-5">
        <h1 className="text-section font-light uppercase text-white">{title}</h1>

        <p className="text-19 text-white/80">{description}</p>

        <div className="flex gap-3 max-w-md">
          <Button className="">EXPLORE</Button>

          <Button className="">VIEW PRODUCTS</Button>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Active Feature */}
      <div className="space-y-3">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-white">{activeFeature.id}</span>

            <h3 className="text-19 max-w-xl text-white">
              {activeFeature.title}
            </h3>
          </div>
          <div className="flex flex-col justify-end">
            <span className="rounded-full text-sm px-1 bg-white/70 text-extra-dark">
              {String(activeIndex + 1).padStart(2, "0")}/
              {String(features.length).padStart(2, "0")}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-white/30 pt-4">
          <div />
        </div>
      </div>
    </div>
  )
}

export default MobileBanner
