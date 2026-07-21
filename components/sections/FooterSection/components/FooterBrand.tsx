import { contactData, socialMedia } from "../data/contactData"
import Image from "next/image"
import RevealItem from "@/components/animations/RevealItem"


const FooterBrand = () => {
  return (
    <section className="container pb-[30px] sm:pb-80 3xl:pb-[84px]">
      <RevealItem>
        <div className="w-full relative h-full max-h-[218px] mt-[40px] overflow-hidden">
          <Image
            src="/icon/logo-mask.svg"
            alt="logo"
            width={2000}
            height={300}
            className="w-full h-full max-h-[218px] pointer-events-none"
          />
          <div
            className="absolute top-0 left-0 w-1/2 h-full bg-white z-10"
            style={{ transform: "translateX(-100%)" }}
          />
          <div
            className="absolute top-0 right-0 w-1/2 h-full bg-white z-10"
            style={{ transform: "translateX(100%)" }}
          />
        </div>
      </RevealItem>

      <div className="flex flex-wrap mt-[60px] md:mt-80 gap-y-20 3xl:mt-[136px]">
        {/* Address */}
        <div className="sm:w-[51%] 3xl:pt-[16px]">
          {contactData.address.map((line, index) => (
            <RevealItem key={index}>
              <p
                className="text-extra-dark leading-[1.54] sm:leading-[1.42] whitespace-pre-line md:tracking-[-0.03em]"
                key={index}
              >
                {line}
              </p>
            </RevealItem>
          ))}
        </div>

        {/* Contact */}
        <div className="sm:w-[49%] ">
          <div className="text-extra-dark text-30 lg:text-60 flex flex-col mb-20 sm:mb-50">
            <RevealItem trigger="viewport">
              <a
                href={`mailto:${contactData.email}`}
                className="section-heading !lowercase leading-[1.3] sm:leading-[1.433]   font-light text-extra-dark w-fit"
              >
                {contactData.email}
              </a>
            </RevealItem>
            <RevealItem trigger="viewport">
              <a
                href={`tel:${contactData.phone}`}
                className="mt-4 section-heading  leading-[1.3] sm:leading-[1.433]    font-light text-extra-dark w-fit"
              >
                {contactData.phone}
              </a>
            </RevealItem>
          </div>

          {/* Social */}
          <RevealItem trigger="viewport">
            <div className="flex flex-wrap gap-x-30 gap-y-[5px]">
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
          </RevealItem>
        </div>
      </div>
    </section>
  )
}

export default FooterBrand
