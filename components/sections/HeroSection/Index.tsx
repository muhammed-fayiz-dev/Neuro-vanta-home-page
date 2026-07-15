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

      <div className="absolute inset-0 bg-black/40" />

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-end px-5 md:px-8 lg:px-10 pb-20 md:pb-25 text-center text-white">
        <RevealItem
          trigger="load"
          className="
    text-hero
    uppercase
    leading-[1.112]
    tracking-[-0.03em]
    max-w-[28ch] lg:max-w-[30ch]
    mx-auto
   
  "
        >
          Advanced Longevity.<br/> Designed for Life Performance.
        </RevealItem>
        <RevealItem className="mt-[clamp(2rem,4vw,4rem)]">
          <Button>For Individual</Button>
        </RevealItem>
      </div>
    </section>
  )
}
