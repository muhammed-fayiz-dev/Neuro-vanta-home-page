"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import ShutterSection from "../sections/ShutterSection"
import MenuIcon from "../ui/Menu/MenuIcon"

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  const [atTop, setAtTop] = useState(true)
  const [openMenu, setOpenMenu] = useState(false)
  const lastScrollY = useRef<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY

      setAtTop(current <= 20)

      if (current < lastScrollY.current) {
        // scrolling up
        setShowNavbar(true)
      } else if (current > lastScrollY.current && current > 80) {
        // scrolling down
        setShowNavbar(false)
      }

      lastScrollY.current = current
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`
    fixed inset-x-0 top-0 z-9999
    transition-all duration-300 ease-in-out
    py-[50px]
     ${showNavbar ? "translate-y-0" : "-translate-y-full"}
    ${atTop ? "bg-transparent py-8" : "bg-black/20 backdrop-blur-xl py-5"}
  `}
      >
        <div className="container flex items-center justify-between">
          {/* Left */}
          <div className="flex w-[30%] items-center z-9999">
            <button onClick={() => setOpenMenu((prv) => !prv)}>
              <MenuIcon
                isOpen={openMenu}
                className="w-[22px] h-auto sm:w-[30px] 2xl:w-[44px]"
              />
            </button>
          </div>

          {/* Center */}
          <div className="flex w-[40%] items-center justify-center">
            <Image
              src={"/icon/logo-mask.svg"}
              width={320}
              height={40}
              alt="logo"
              className="w-39.5 h-5 md:w-xs md:h-10"
            />
          </div>

          {/* Right */}
          <div className="flex w-[30%] justify-end items-center gap-2.75 md:gap-1">
            <button className="hidden md:flex justify-center items-center bg-secondary   text-extra-dark text-center leading-1 rounded-[50px] text-15 uppercase px-20 py-[3px] cursor-pointer 3xl:w-[109px] h-[30px] sm:h-8">
              Contact
            </button>

            <button>
              <Image
                src="/icon/phone.svg"
                alt="Phone"
                width={30}
                height={30}
                className="lg:hidden h-[30px] w-[30px]"
              />
            </button>
            <button>
              <Image
                src="/icon/search.svg"
                alt="Search"
                width={32}
                height={32}
                className="h-[30px] w-[30px] lg:h-[32px] lg:w-[32px]"
              />
            </button>
          </div>
        </div>
      </header>
      <ShutterSection isOpen={openMenu} />
    </>
  )
}

export default Navbar
