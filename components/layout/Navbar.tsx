import Image from "next/image"

const Navbar = () => {
  return (
    <header className="absolute inset-x-0 top-4 z-20 px-6 sm:px-8 lg:px-16 xl:px-24">
      <div className="flex items-center justify-between">
        {/* Left */}
        <button>
          <Image
            src="/icon/menu.svg"
            alt="Menu"
            width={28}
            height={28}
            className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8"
          />
        </button>

        {/* Center */}
        <Image src={"/icon/logo.svg"} width={320} height={40} alt="logo" className="w-39.5 h-5 md:w-xs md:h-10"/>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          <button className="text-[15px] rounded-full bg-primary px-2 font-sm uppercase text-extra-dark sm:text-sm lg:text-base">
            Contact
          </button>

          <button>
            <Image
              src="/icon/search.svg"
              alt="Search"
              width={20}
              height={20}
              className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
            />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
