import PostCard from "./PostCard";

export default function PostList({ posts = [], view = "grid" }) {
  const isList = view === "list";

  return (
    <div
      className={
        isList
          ? "flex flex-col gap-6"
          : "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      }
    >
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          variant={isList ? "list" : "grid"}
        />
      ))}
    </div>
  );
}
