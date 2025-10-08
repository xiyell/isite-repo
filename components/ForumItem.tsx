"use client";
import { useRouter } from "next/navigation";
import { Forum } from "@/lib/forum_data";


interface Props {
  forum: Forum;
  clickable?: boolean;
}

export default function ForumItem({ forum, clickable = true }: Props) {
  const router = useRouter();

  return (
    <>
    <div
      onClick={clickable ? () => router.push(`/forum/${forum.id}`) : undefined}
      className={`p-5  border border-white/30 bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-md rounded-2xl shadow transition-transform duration-300 ease-in-out flex flex-col gap-3 ${clickable ? "cursor-pointer hover:shadow-lg hover:scale-105" : ""}`}>

      <div className="flex items-center gap-3">
        <img
          src={forum.user.avatar}
          alt={forum.user.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
            <p className="text-sm text-white">by {forum.user.name}</p>

        </div>

      </div>
      <h2 className="text-lg font-sans text-white line-clamp-2">
        {forum.title}
      </h2>

      <p className="text-sm text-white line-clamp-3">
        {forum.description}
      </p>


      <div className="flex items-center gap-2 text-white text-sm mt-auto pt-2 border-t">
       
        <span>{forum.commentCount ?? 0} comments</span>
      </div>
    </div>
    </>
  );
}