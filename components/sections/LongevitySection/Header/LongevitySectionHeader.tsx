import { ArrowUpRight } from "lucide-react";
import { longevityCategory } from "../LongevityData/longevityCategory"; 

const LongevitySectionHeader = () => {
  return (
    <header className="flex flex-col justify-between gap-12 lg:flex-row lg:items-start">
      {/* Title */}
      <div className="lg:w-2/5">
        <h2 className="text-4xl font-light uppercase tracking-tight text-neutral-700">
          LONGEVITY SYSTEMS
        </h2>
      </div>

      {/* Categories */}
      <div className="grid flex-1 grid-cols-1 gap-x-10 md:grid-cols-2">
        {longevityCategory.map((category:string) => (
          <div
            key={category}
            className="group flex cursor-pointer items-center justify-between border-b border-neutral-200 py-3"
          >
            <p className="text-sm text-neutral-600 transition-colors duration-200 group-hover:text-neutral-900">
              {category}
            </p>

            <ArrowUpRight
              size={18}
              strokeWidth={1.5}
              className="translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </header>
  );
};

export default LongevitySectionHeader;