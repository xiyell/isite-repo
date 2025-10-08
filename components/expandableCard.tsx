"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ExpandableAnnouncementCardProps {
  title: string;
  description?: string;
  src: string;
  fullWidth?: boolean;
  children?: React.ReactNode;
  className?: string;
  classNameExpanded?: string;
}

export default function ExpandableAnnouncementCard({
  title,
  description,
  src,
  fullWidth,
  children,
  className,
  classNameExpanded,
}: ExpandableAnnouncementCardProps) {
  const [active, setActive] = React.useState(false);
  const id = React.useId();

  return (
    <>
      {/* Dimmed background when expanded */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setActive(false)}
          />
        )}
      </AnimatePresence>

      {/* Expanded View */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className={cn(
                "relative w-full max-w-5xl rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl text-white",
                classNameExpanded
              )}
            >
              {/* Image */}
              <div className="relative w-full h-80">
                <Image
                  src={src}
                  alt={title}
                  fill
                  className="object-cover object-center will-change-transform"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-8">
                <h2 className="text-3xl font-semibold mb-3">{title}</h2>
                {description && (
                  <p className="text-gray-300 text-md mb-6 text-left">{description}</p>
                )}
                {children && (
                  <div className="text-gray-200 text-sm leading-relaxed">
                    {children}
                  </div>
                )}
                <button
                  onClick={() => setActive(false)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Compact card */}
      <motion.div
        key="compact"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        onClick={() => setActive(true)}
        className={cn(
          "relative rounded-2xl overflow-hidden shadow-md cursor-pointer bg-neutral-900 will-change-transform",
          fullWidth ? "w-full h-[360px]" : "w-full md:w-[32%] h-[220px]",
          className
        )}
      >
        {/* Image */}
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 p-4 z-10">
          <div className="bg-black/40 backdrop-blur-sm rounded-md px-3 py-2 inline-block">
            <h2 className="text-white text-sm md:text-sm font-medium">
              {title}
            </h2>
          </div>
        </div>
      </motion.div>
    </>
  );
}
