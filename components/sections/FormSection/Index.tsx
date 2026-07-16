import Section from "@/components/layout/SectionLayout"
import ContactForm from "./components/ContactForm"
import RevealItem from "@/components/animations/RevealItem"

const FormSection = () => {
  return (
    <Section className="bg-secondary">
      <div className="gap-20 ">
        {/* Left */}
        <div>
          <RevealItem className="section-heading">
            Where Intelligence Meets Longevity
          </RevealItem>

          <RevealItem className="mt-4 text-[clamp(60px,7.8vw,150px)] uppercase font-semibold leading-none text-extra-dark">
            Begin Here.
          </RevealItem>
        </div>

        {/* Right */}
        <ContactForm />
      </div>
    </Section>
  )
}

export default FormSection
