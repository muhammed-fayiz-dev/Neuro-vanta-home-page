"use client"

import Image from "next/image"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

interface LoaderProps {
  onComplete?: () => void
}

export default function Loader({ onComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete,
    })

    gsap.set(logoRef.current, {
      opacity: 0,
      scale: 0.8,
    })

    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
    })
      .to({}, { duration: 0.4 }) // pause
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power3.inOut",
      })
  }, [])

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-white"
    >
      <div ref={logoRef}>
        <Image
          src="/icon/logo.svg"
          alt="Neuro Vanta"
          width={358}
          height={218}
          className="w-89 h-54 md:w-400 md:h-100"
          priority
        />
      </div>
    </div>
  )
}