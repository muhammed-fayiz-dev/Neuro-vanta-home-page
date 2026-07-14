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
    <div onClick={onClick} className="group flex flex-col gap-3">
      <span className="text-xs text-white/60">{id}</span>

      <h3 className="text-sm font-20 text-white">{title}</h3>

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
