"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  // Embla setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  const slides = [
    { id: 1, title: "Slide 1", url: "/post1.jpg" },
    { id: 2, title: "Slide 2", url: "/post1.jpg" },
    { id: 3, title: "Slide 3", url: "/post1.jpg" },
  ];

  return (
    <>
      <div className="ml-4 relative flex flex-row items-center justify-between min-h-screen text-center gap-6 ">
        {/* TITLE */}
        <div className="z-10 font-karantina text-left">
          <div className="relative inline-block">
            <span className="absolute inset-0 backdrop-blur-[2px]" />
            <div className="relative -ml-2.5 max-w-[1000px] mt-[-400px]">
              <h3 className={`${title({ size: "md" })}`}>Welcome,</h3>
              <br />
              <span className={`${title()}`}>INTEGRATED&nbsp;</span>
              <span className={`${title({ color: "violet" })}`}>STUDENT&nbsp;</span>
              <span className={`${title()}`}>
                IN INFORMATION&nbsp;
                <br />
                TECHNOLOGY EDUCATION PLUS&nbsp;
              </span>
              <div className={`${title({ size: "sm" })} !font-semibold`}>
                <br />
                Beautiful, fast and modern React UI library.
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="absolute -right-25 top-1/2 -translate-y-1/2 pointer-events-none">
          <Image
            src="iSite1.svg"
            alt="iSITE Logo"
            width={1000}
            height={1000}
            priority
            className="w-[800px] h-auto transition-transform duration-500 ease-in-out hover:scale-110 pointer-events-auto"
          />
        </div>
      </div>

      {/* Embla Carousel */}
      <div className="relative max-w-3xl mx-auto -mt-10"> 
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="flex-shrink-0 w-full h-96 relative rounded-lg overflow-hidden shadow-lg mr-4"
              >
                <img
                  src={slide.url}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-4 bg-black/30 text-white font-semibold">
                  {slide.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows using Tailwind */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
          onClick={() => emblaApi?.scrollPrev()}
        >
          ◀
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
          onClick={() => emblaApi?.scrollNext()}
        >
          ▶
        </button>
      </div>
    </>
  );
}
