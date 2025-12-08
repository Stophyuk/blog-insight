import { BlogPost } from "@/types/blog";
import { PostCard } from "./PostCard";

interface PostListProps {
  posts: BlogPost[];
  className?: string;
}

export function PostList({ posts, className = "" }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">아직 게시글이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
