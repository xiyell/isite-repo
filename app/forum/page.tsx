import ForumItem from "@/components/ForumItem";
import { Forum } from "@/lib/forum_data";

async function getForums(): Promise<Forum[]> {
  // Fetch posts, users, and comments in parallel
  const [postsRes, usersRes, commentsRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" }),
    fetch("https://jsonplaceholder.typicode.com/users", { cache: "no-store" }),
    fetch("https://jsonplaceholder.typicode.com/comments", { cache: "no-store" }),
  ]);

  if (!postsRes.ok || !usersRes.ok || !commentsRes.ok) return [];

  const posts = await postsRes.json();
  const users = await usersRes.json();
  const comments = await commentsRes.json();

  return posts.slice(0, 12).map((post: any) => {
    const user = users.find((u: any) => u.id === post.userId);
    const commentCount = comments.filter((c: any) => c.postId === post.id).length;

    return {
      id: post.id.toString(),
      title: post.title,
      description: post.body,
      user: {
        name: user ? user.name : `User ${post.userId}`,
        avatar: "https://i.pinimg.com/236x/f3/85/d7/f385d78eba93e8b768bcc04bf96fe5a5.jpg",
      },
      commentCount,
    };
  });
}

export default async function ForumsPage() {
  const forums = await getForums();

  return (
    <div className="min-h-screen p-6 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl text-white">Discussion Forums</h1>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition">
            + Create Post
          </button>
        </div>

        {/* Forum Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Create Post Placeholder Card */}
          <div className="flex items-center justify-center border-2 border-dashed border-white/30 rounded-2xl p-6 hover:border-white/50 cursor-pointer transition">
            <span className="text-white/70 text-lg">+ Create New Post</span>
          </div>

          {forums.map((forum) => (
            <ForumItem key={forum.id} forum={forum} />
          ))}
        </div>
      </div>
    </div>
  );
}
