export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/Neuro_vanta_Header_1.mp4" type="video/mp4" />
      </video>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center text-white">
        <h1 className="text-hero font-sans">ADVANCED LONGEVITY.</h1>

        <h1 className="text-hero font-sans">DESIGNED FOR LIFE PERFORMANCE.</h1>
      </div>
    </section>
  )
}
