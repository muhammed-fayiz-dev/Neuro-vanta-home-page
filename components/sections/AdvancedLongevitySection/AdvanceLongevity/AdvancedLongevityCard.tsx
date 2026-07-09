import Image from "next/image"
import { card } from "./advancedLongevityData"


export const AdvancedLongevityCard = () => {
  return (
    <div className="w-full lg:w-3/5">
      {card.map((item) => (
        <div
          key={item.value}
          className="
            group
            flex items-center justify-between
            border-t border-neutral-300
            bg-primary
            px-6 py-6
            transition-all duration-300 ease-out
            hover:bg-secondary
            hover:scale-[1.02]
            hover:shadow-sm
            origin-center
          "
        >
          {/* Value */}
          <div className="w-20">
            <span className="text-4xl font-light text-neutral-700">
              {item.value}
            </span>
          </div>

          {/* Title */}
          <div className="flex-1">
            <p className="text-sm text-neutral-600 transition-colors duration-300 group-hover:text-neutral-800">
              {item.title}
            </p>
          </div>

          {/* Icon */}
          <div className="flex w-8 justify-end">
            <Image
              src={item.icon}
              alt={item.title}
              width={24}
              height={24}
              className="
                opacity-0
                scale-75
                transition-all duration-300
                group-hover:opacity-100
                group-hover:scale-100
              "
            />
          </div>
        </div>
      ))}
    </div>
  );
};
