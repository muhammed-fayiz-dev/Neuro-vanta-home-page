import { ArrowUpRight } from "lucide-react"
import longevityCardData, {
  LongevityCardDataType,
} from "../data/longevityCardData"


interface LongevityHeaderProps {
  selectedIndex: number
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
}

const LongevitySectionHeader: React.FC<LongevityHeaderProps> = ({
  selectedIndex,
  setSelectedIndex,
}) => {
  return (
    <header className="flex flex-col justify-between gap-7 md:gap-12 lg:flex-row lg:items-start">
      {/* Title */}
      <div className="flex self-stretch  lg:w-2/5">
        <h2 className="text-section font-light uppercase tracking-tight text-neutral-700">
          LONGEVITY SYSTEMS
        </h2>
      </div>

      {/* Desktop Categories */}
      <div className="hidden flex-1 grid-cols-2 gap-x-10 md:grid">
        {longevityCardData.map((category: LongevityCardDataType, ind) => (
          <div
            key={category.id}
            onClick={() => setSelectedIndex(ind)}
            className="group flex cursor-pointer items-center justify-between border-b border-neutral-200 py-3"
          >
            <p
              className={`text-19 transition-colors duration-200 ${
                selectedIndex === ind
                  ? "font-medium text-neutral-900"
                  : "text-neutral-600 group-hover:text-neutral-900"
              }`}
            >
              {category.title}
            </p>

            <ArrowUpRight
              size={18}
              strokeWidth={1.5}
              className={`transition-all duration-300 ${
                selectedIndex === ind
                  ? "translate-x-0 opacity-100"
                  : "translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Mobile Select */}
      <div>
        {/* <Select
          value={selectedIndex.toString()}
          onValueChange={(value) => setSelectedIndex(Number(value))}
        >
          <SelectTrigger
            className="
    h-auto
    w-full
    rounded-none
    border-0
    border-b
    border-neutral-200
    bg-transparent
    px-0
    py-4

    text-19
    font-medium
    text-neutral-700

    shadow-none

    focus:ring-0
    focus:ring-offset-0
"
          >
            <SelectValue />
          </SelectTrigger>

          <SelectContent
            className="
    rounded-lg
    border
    border-neutral-200
    bg-white
    shadow-xl
"
          >
            {longevityCardData.map((item, index) => (
              <SelectItem key={item.id} value={index.toString()}>
                {item.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select> */}
      </div>
    </header>
  )
}

export default LongevitySectionHeader
