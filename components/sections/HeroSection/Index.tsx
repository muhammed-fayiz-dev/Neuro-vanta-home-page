import RevealItem from "@/components/animations/RevealItem"
import Navbar from "@/components/layout/Navbar"
import Button from "@/components/ui/Button/Button"

export default function Hero() {
  return (
    <section className="sticky top-0 h-screen overflow-hidden">
      {/* Background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/Neuro_vanta_Header_1.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <div className="container relative z-10 pb-[clamp(3.75rem,5.84vw+2.38rem,9.375rem)] min-h-screen flex flex-col items-center justify-end   gap-[20px] sm:gap-[50px]    text-white">
        <RevealItem
          trigger="load"
          className="
    text-hero
    text-center
    uppercase
    leading-[1.142] 
    max-w-[28ch] lg:max-w-[30ch]
    mx-auto
    // tracking-[-0.05em]
   
  "
        >
          Advanced Longevity.
          <br />
          Designed for Life Performance.
        </RevealItem>
        <RevealItem
          trigger="load"
          className="mb-1"
        >
          <Button className="uppercase">Longevity Systems</Button>
        </RevealItem>
      </div>
    </section>
  )
}
