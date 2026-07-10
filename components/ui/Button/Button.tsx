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
    group inline-flex w-fit items-center
    rounded-full border
    transition-all duration-300
    whitespace-nowrap

    ${
      theme === "light"
        ? "border-secondary bg-none text-secondary hover:bg-primary hover:text-extra-darkad"
        : "border-extra-dark bg-dark text-white hover:bg-primary hover:text-extra-dark"
    }

    ${size === "sm" ? "h-8 px-2 pr-4" : "h-10 px-2.5 pr-5"}

    ${className}
  `}
    >
      <Image
        src="/icon/circle-arrow-right.svg"
        alt=""
        width={27}
        height={27}
        className="-ml-2 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
      />

      <span className="ml-2  text-button uppercase">
        {children}
      </span>
    </button>
  )
}
