import Banner from "@/components/sections/BannerSection/Banner";
import Hero from "@/components/sections/HeroSection/Hero";
import LongevityIndex from "@/components/sections/LongevitySection/index"
import { bannerData } from "@/components/sections/BannerSection/bannerData";
import AdvancedSection from "@/components/sections/AdvancedLongevitySection";
export default function Page() {
  return (
    <>
    <Hero />
     <Banner imageSrc="/Banner-bg-1.jpg"  imageAlt="eye closeup photo" title="BESPOKE WELLNESS & LONGEVITY SOLUTIONS"
      description="Personalized, science-led systems tailored to individual physiology, lifestyle, and performance goals."
      features={bannerData} />
     <Banner imageSrc="/Banner-bg-2.png"  imageAlt="Person in a tube" title="WELLNESS SPACE DESIGN"
      description="End-to-end design and integration of intelligent wellness environments—where architecture, technology, and human biology work in harmony."
      features={bannerData}/>
        <>
        <LongevityIndex/>
        </>
    
      <AdvancedSection/>
    </>
  )
}
