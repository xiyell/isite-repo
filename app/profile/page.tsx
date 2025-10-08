"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center bg-transparent text-gray-100">
      {/* Main content */}
      <div className="relative w-full max-w-3xl mt-24 bg-white/5 border border-white/10 rounded-2xl shadow-md p-6 sm:p-10 text-white z-10">
            {/* Cover photo */}
            <div className="relative h-48 w-full rounded-xl overflow-hidden mb-16">
            <Image
                src="/post1.jpg"
                alt="Cover"
                fill
                className="object-cover"
            />
            </div>

            {/* Profile picture — moved OUTSIDE of cover */}
            <div className="absolute top-[11rem] left-10">
            <div className="relative w-32 h-32">
                <Image
                src="/post1.jpg"
                alt="Profile Picture"
                fill
                className="object-cover rounded-full border-4 border-white shadow-md"
                />
            </div>
        </div>


    
        {/* Name + Edit button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-8 sm:mt-0">
          <div>
            <h1 className="text-2xl mt-5 font-medium text-white">Grey Mendoza</h1>
            <p className="text-gray-300 text-sm">Full Stack Developer</p>
          </div>
          <button
            onClick={() => setEditing(!editing)}
            className="mt-4 sm:mt-0 px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-normal"
          >
            {editing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>

        {/* Bio section */}
        <div className="mt-6 border-t border-white/10 pt-4">
          {editing ? (
            <textarea
              className="w-full bg-transparent border border-white/20 rounded-lg p-3 text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="Passionate about creating modern, beautiful, and efficient web applications. Focused on clean design and great user experience."
            ></textarea>
          ) : (
            <p className="text-gray-300 text-sm leading-relaxed">
              Passionate about creating modern, beautiful, and efficient web applications. Focused on clean design and great user experience.
            </p>
          )}
        </div>

        {/* Post box */}
        <div className="mt-8">
          <div className="flex items-start gap-3">
            <Image
              src="/post1.jpg"
              alt="User Avatar"
              width={48}
              height={48}
              className="rounded-full border border-white/20"
            />
            <textarea
              className="flex-1 bg-white/5 rounded-lg p-3 text-gray-200 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="What's on your mind, Grey?"
            ></textarea>
          </div>
          <div className="flex justify-end mt-3">
            <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-normal transition">
              Post
            </button>
          </div>
        </div>

        {/* Posts feed */}
        <div className="mt-10 flex flex-col gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-4"
            >
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src="/post1.jpg"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full border border-white/20"
                />
                <div>
                  <p className="text-white text-sm font-medium">Grey Mendoza</p>
                  <span className="text-gray-400 text-xs">Just now</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                This is my latest post! Loving this new profile layout.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
