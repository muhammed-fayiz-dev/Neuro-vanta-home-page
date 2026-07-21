"use client"
import FooterBrand from "./components/FooterBrand"
import Footer from "./components/Footer"
import { motion } from "framer-motion"
import RevealItem from "@/components/animations/RevealItem"

const FooterSection = () => {
  return (
    <>
      <FooterBrand />
      <div className="container">
        <RevealItem trigger="viewport">
          <motion.div
            className="h-[2px] w-full bg-border-muted origin-center"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </RevealItem>
      </div>
      <Footer />
    </>
  )
}

export default FooterSection
