"use client";

import { useRef } from "react";
import LongevityCards from "./LongevityCards/LongevityCards";
import LongevitySectionHeader from "./Header/LongevitySectionHeader";


export default function LongevityIndex() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen overflow-hidden bg-white">
        <div className="mx-auto flex w-full max-w-[1720px] flex-col gap-5 justify-center px-5 sm:px-8 lg:px-16 xl:px-24">
          <LongevitySectionHeader />

          <div >
            <LongevityCards scrollTargetRef={sectionRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
