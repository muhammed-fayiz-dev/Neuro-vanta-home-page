import Banner from "@/components/sections/BannerSection/Index"
import Hero from "@/components/sections/HeroSection/Index"
import LongevityIndex from "@/components/sections/LongevitySection/index"
import { bannerData } from "@/components/sections/BannerSection/data/bannerData"
import AdvancedSection from "@/components/sections/AdvancedLongevitySection"
import BrandSection from "@/components/sections/BrandSection/Index"
import FormSection from "@/components/sections/FormSection/Index"
import IndustriesSection from "@/components/sections/IndustriesSection/Index"
import WhyChooseSection from "@/components/sections/WhyChooseSection/Index"


export default function Page() {
  return (
    <>
      <Hero />
      <Banner
        imageSrc="/Banner-bg-1.jpg"
        imageAlt="eye closeup photo"
        title="BESPOKE WELLNESS & LONGEVITY SOLUTIONS"
        description="Personalized, science-led systems tailored to individual physiology, lifestyle, and performance goals."
        features={bannerData}
      />
      <Banner
        imageSrc="/Banner-bg-2.png"
        imageAlt="Person in a tube"
        title="WELLNESS SPACE DESIGN"
        description="End-to-end design and integration of intelligent wellness environments—where architecture, technology, and human biology work in harmony."
        features={bannerData}
      />
      
        <LongevityIndex />
      

      <AdvancedSection />
      <WhyChooseSection />
      <IndustriesSection />
      <BrandSection/>
      <FormSection/>
    </>
  )
}
