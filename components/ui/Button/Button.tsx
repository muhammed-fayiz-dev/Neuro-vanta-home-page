import Image from "next/image"
import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  size?: "sm" | "md"
  theme?: "light" | "dark"
}

export default function Button({
  children,
  size = "sm",
  theme = "light",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        group inline-flex items-center overflow-hidden rounded-full border
        transition-all duration-300
            ${theme == "light" ? "border-secondary text-secondary bg-none hover:bg-primary bg-primary/45 hover:text-dark" : "border-secondary text-dark hover:bg-primary hover:text-white "}


        ${size === "sm" ? "h-9" : "h-12"}

        ${className}
      `}
    >
      {/* Icon */}

      <Image
        src="/icon/circle-arrow-right.svg"
        alt=""
        width={30}
        height={30}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />

      {/* Text */}
      <span className={`px-5 text-[11px]  font-sm uppercase tracking-[0.12em]`}>
        {children}
      </span>
    </button>
  )
}
