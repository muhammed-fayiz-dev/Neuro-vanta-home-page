import Banner from "@/components/sections/BannerSection/Index"
import Hero from "@/components/sections/HeroSection/Index"
import LongevityIndex from "@/components/sections/LongevitySection/index"
import { bannerData } from "@/components/sections/BannerSection/data/bannerData"
import AdvancedSection from "@/components/sections/AdvancedLongevitySection"
import BrandSection from "@/components/sections/BrandSection/Index"
import FormSection from "@/components/sections/FormSection/Index"
import IndustriesSection from "@/components/sections/IndustriesSection"
import WhyChooseSection from "@/components/sections/WhyChooseSection/Index"
import FooterSection from "@/components/sections/FooterSection/Index"

export default function Page() {
  return (
    <>
    <div className="relative">

      <Hero />
      <Banner
      
        title="BESPOKE WELLNESS & LONGEVITY SOLUTIONS"
        description="Personalized, science-led systems tailored to individual physiology, lifestyle, and performance goals."
        features={bannerData.section1}
      />
      <Banner
       
      
        title="WELLNESS SPACE DESIGN"
        description="End-to-end design and integration of intelligent wellness environments—where architecture, technology, and human biology work in harmony."
        features={bannerData.section2}
      />
    </div>
     

      <LongevityIndex />

      <AdvancedSection />
      <WhyChooseSection />
      <IndustriesSection />
      <BrandSection />
      <FormSection />
      <FooterSection />
    </>
  )
}
