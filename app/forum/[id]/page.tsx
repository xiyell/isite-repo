import ForumItem from "@/components/ForumItem";

interface Comment {
  id: string;
  name: string;
  email: string;
  body: string;
}

async function getForumById(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const post = await res.json();

  const userRes = await fetch(
    `https://jsonplaceholder.typicode.com/users/${post.userId}`,
    { cache: "no-store" }
  );
  const user = userRes.ok ? await userRes.json() : null;

  return {
    id: post.id.toString(),
    title: post.title,
    description: post.body,
    user: {
      name: user ? user.name : `User ${post.userId}`,
      avatar:
        "https://i.pinimg.com/236x/f3/85/d7/f385d78eba93e8b768bcc04bf96fe5a5.jpg",
    },
    likes: Math.floor(Math.random() * 100),
    dislikes: Math.floor(Math.random() * 50),
  };
}

async function getCommentsByForumId(id: string): Promise<Comment[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return [];

  const comments = await res.json();
  return comments.map((c: any) => ({
    id: c.id.toString(),
    name: c.name,
    email: c.email,
    body: c.body,
  }));
}

export default async function ForumPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const forum = await getForumById(id);
  const comments = await getCommentsByForumId(id);

  if (!forum) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-900">
        <p className="text-gray-400">Forum not found</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full  bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-2xl shadow-2xl p-8">
        {/* User Info */}
        <div className="flex items-center gap-3 mb-6">
          <img
            src={forum.user.avatar} 
            alt={forum.user.name}
            className="w-12 h-12 rounded-full object-cover border border-white/30"
          />
          <div>
            <p className="text-sm text-white/80">Posted by</p>
            <p className="text-base font-medium">{forum.user.name}</p>
          </div>
        </div>

        {/* Forum Content */}
        <h2 className="text-2xl  mb-3">{forum.title}</h2>
        <p className="text-white/80 mb-6 leading-relaxed">
          {forum.description}
        </p>

        {/* Likes & Dislikes */}
        <div className="flex items-center gap-6 mb-8">
          <span className="text-green-400 font-medium">
            👍 {forum.likes} Agrees
          </span>
          <span className="text-red-400 font-medium">
            👎 {forum.dislikes} Disagrees
          </span>
        </div>

        {/* Comments */}
        <h3 className="text-xl mb-4">Comments</h3>
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white/5 border border-white/10 rounded-xl p-4"
            >
              <p className="text-sm ">{comment.name}</p>
              <p className="text-xs text-white/60">{comment.email}</p>
              <p className="text-white/80 mt-2 leading-relaxed">
                {comment.body}
              </p>
            </div>
          ))}

          {comments.length === 0 && (
            <p className="text-white/50">No comments yet.</p>
          )}
        </div>
      </div>
    </main>
  );
}
