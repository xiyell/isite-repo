"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { title } from "@/components/primitives";
import ExpandableCard from "@/components/expandableCard";
interface Announcement {
  id: number;
  title: string;
  description: string;
  src: string;
}

export default function AnnouncementPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    // Fetch announcements from public folder
    fetch("/announcements.json")
      .then((res) => res.json())
      .then((data) => setAnnouncements(data))
      .catch((err) => console.error("Error loading announcements:", err));
  }, []);

  if (announcements.length === 0) {
    return <div className="text-center py-20 text-lg">Loading announcements...</div>;
  }

  const latest = announcements[0];
  const others = announcements.slice(1);

  return (
    <div className="text-center mt-10 px-6 md:px-20">
      {/* Header */}
      <span className={`${title()} mb-8 block`}>Announcements</span>

      {/* Latest Announcement */}
      <div
        id="latest-announcement"
       className=" my-8 flex flex-col md:flex-row items-center gap-8
           bg-white/10 backdrop-blur-lg border border-white/20
           rounded-2xl shadow-lg overflow-hidden
           transition hover:scale-[1.02] hover:shadow-xl"

      >
        {/* Left Text */}
        <div className="md:w-1/2 text-left p-10">
          <span className="text-sm text-[#ffffff] block mb-2">Latest Update</span>
          <h2 className="font-semibold text-2xl md:text-3xl mb-3 text-[#ffffff]">
            {latest.title}
          </h2>
          <p className="text-[#ffffff] text-md md:text-sm leading-relaxed whitespace-pre-line">
            {latest.description}
          </p>
        </div>

      {/* Right Image */}
      <div className="relative md:w-1/2 w-full h-[320px] md:h-[420px]">
        <Image
          src={latest.src}
          alt={latest.title}
          fill
          className="object-cover object-center"
        />
      </div>

       
      </div>

       {/* Other Announcements */}
      <div className="flex flex-wrap justify-between gap-y-6">
        {others.map((post) => (
          <ExpandableCard
            key={post.id}
            title={post.title}
            description={post.description}
            src={post.src}
          />
        ))}
      </div>
    </div>
  );
}
