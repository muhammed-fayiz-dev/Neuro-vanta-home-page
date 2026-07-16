import { contactData, socialMedia } from "../data/contactData"
import Image from "next/image"
import Section from "@/components/layout/SectionLayout"
import RevealItem from "@/components/animations/RevealItem"

const FooterBrand = () => {
  return (
    <Section className="pt-0">
      <RevealItem>
        <Image
          src="/icon/logo.svg"
          alt="logo"
          width={1720}
          height={218}
          className="h-auto w-full max-w-[1720px]"
        />
      </RevealItem>

      {/* Bottom */}
      <div className="mt-10 px-30px lg:mt-20 grid gap:12 md:gap-16 lg:grid-cols-[1fr_1.4fr]">
        {/* Address */}
        <div className="space-y-1 text-19 text-extra-dark">
          {contactData.address.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col  items-baseline ">
          <a
            href={`mailto:${contactData.email}`}
            className="text-60 leading[34px] md:leading-21  font-light text-extra-dark"
          >
            {contactData.email}
          </a>

          <a
            href={`tel:${contactData.phone}`}
            className="mt-4 text-60 leading[34px] md:leading-21   font-light text-extra-dark"
          >
            {contactData.phone}
          </a>

          {/* Social */}
          <div className="mt-8 flex gap-6">
            {socialMedia.map((media) => (
              <a href={media.href} key={media.name}>
                <Image
                  src={media.icon}
                  alt={media.name}
                  width={30}
                  height={30}
                  className=" w-fit h-fit  transition-opacity hover:opacity-70"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default FooterBrand
