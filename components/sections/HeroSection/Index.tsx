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
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
        <div className="max-w-6xl">
          <h1 className="text-hero uppercase leading-[0.95]">
            Advanced Longevity.
          </h1>

          <h1 className="mt-2 text-hero uppercase leading-[0.95]">
            Designed for Life Performance.
          </h1>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <Button>For Commercial</Button>
          <Button>For Individual</Button>
        </div>
      </div>
    </section>
  )
}
