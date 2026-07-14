"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  trigger?: "load" | "viewport" | "scroll";
  start?: string;
}

export default function RevealText  ({
  children,
  className = "",
  duration = 1.2,
  delay = 0,
  trigger = "viewport",
  start = "top 85%",
}: RevealTextProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!textRef.current) return;

      switch (trigger) {
        case "load":
          gsap.fromTo(
            textRef.current,
            {
              yPercent: 100,
            },
            {
              yPercent: 0,
              duration,
              delay,
              ease: "power4.out",
            }
          );
          break;

        case "viewport":
          gsap.fromTo(
            textRef.current,
            {
              yPercent: 100,
            },
            {
              yPercent: 0,
              duration,
              delay,
              ease: "power4.out",
              scrollTrigger: {
                trigger: wrapperRef.current,
                start,
                once: true,
              },
            }
          );
          break;

        case "scroll":
          gsap.fromTo(
            textRef.current,
            {
              yPercent: 100,
            },
            {
              yPercent: 0,
              ease: "none",
              scrollTrigger: {
                trigger: wrapperRef.current,
                start: "top bottom",
                end: "top center",
                scrub: true,
              },
            }
          );
          break;
      }
    },
    { scope: wrapperRef }
  );

  return (
    <div ref={wrapperRef} className="overflow-hidden">
      <span
        ref={textRef}
        className={`block will-change-transform ${className}`}
      >
        {children}
      </span>
    </div>
  );
}