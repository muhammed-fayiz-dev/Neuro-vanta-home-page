import { FC } from "react"

interface BannerFeatureProps {
  id: string
  title: string
  active: boolean
  onClick: () => void
}

const BannerFeature: FC<BannerFeatureProps> = ({
  id,
  title,
  active,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="group flex flex-col">
      <span
        className={`"text-19 leading-[1.666] sm:leading-[1.73] mb-[5px] sm:mb-[14px]   ${active ? "text-white" : "text-white/80"}`}
      >
        {id}
      </span>

      <h3
        className={`"text-19 leading-[1.5263] mb-20 sm:mb-25 sm:min-h-[45px] 2xl:min-h-0  ${active ? "text-white" : "text-white/80"}`}
      >
        {title}
      </h3>

      <div
        className={`
        h-px
        transition-all
        duration-500
        ${active ? "bg-white" : "bg-white/30"}
    `}
      />
    </div>
  )
}

export default BannerFeature
