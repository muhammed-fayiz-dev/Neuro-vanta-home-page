import Section from "@/components/layout/SectionLayout"
import ContactForm from "./components/ContactForm"

const FormSection = () => {
  return (
    <Section className="bg-secondary">
      <div className="gap-20 ">
        {/* Left */}
        <div>
          <p className="uppercase text-section text-extra-dark">
            Where Intelligence Meets Longevity
          </p>

          <h2 className="mt-4 text-[clamp(3rem,5vw,7rem)] uppercase font-semibold leading-none text-extra-dark">
            Begin Here.
          </h2>
        </div>

        {/* Right */}
        <ContactForm />
      </div>
    </Section>
  )
}

export default FormSection
