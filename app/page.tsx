import Banner from "@/components/sections/BannerSection/Banner";
import Hero from "@/components/sections/HeroSection/Hero";
import LongevityIndex from "@/components/sections/LongevitySection/index"
export default function Page() {
  return (
    <>
    <Hero />
     <Banner imageSrc="/Banner-bg-1.jpg"  imageAlt="eye closeup photo" title="BESPOKE WELLNESS & LONGEVITY SOLUTIONS"
      description="Personalized, science-led systems tailored to individual physiology, lifestyle, and performance goals."
      features={[
        {
          id: "01",
          title: "Personalized to Individual Biology",
        },
        {
          id: "02",
          title: "Science-Led & Technology-Enabled",
        },
        {
          id: "03",
          title: "Measurable, Outcome-Focused Results",
        },
        {
          id: "04",
          title: "Adaptive & Evolutive Systems",
        },
      ]} />
     <Banner imageSrc="/Banner-bg-2.png"  imageAlt="Person in a tube" title="BESPOKE WELLNESS & LONGEVITY SOLUTIONS"
      description="Personalized, science-led systems tailored to individual physiology, lifestyle, and performance goals."
      features={[
        {
          id: "01",
          title: "Personalized to Individual Biology",
        },
        {
          id: "02",
          title: "Science-Led & Technology-Enabled",
        },
        {
          id: "03",
          title: "Measurable, Outcome-Focused Results",
        },
        {
          id: "04",
          title: "Adaptive & Evolutive Systems",
        },
      ]}/>

      <div>
        <LongevityIndex/>
      </div>
    </>
  )
}
