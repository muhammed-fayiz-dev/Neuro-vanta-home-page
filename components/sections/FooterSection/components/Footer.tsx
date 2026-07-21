import Section from "@/components/layout/SectionLayout"
import FooterNavigation from "./FooterNavigation"
import { footerLinks } from "../data/navigationData"
import FooterAccordion from "@/components/ui/Accodion/Accordion"

export default function Footer() {
  return (
    <Section className="pt-0">
      <div className=" hidden lg:block  pt-20">
        <FooterNavigation />
      </div>
      <div className="lg:hidden">
        {footerLinks.map((section) => (
          <FooterAccordion key={section.title} section={section} />
        ))}
      </div>
    </Section>
  )
}
