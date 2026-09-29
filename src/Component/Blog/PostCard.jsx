import { Link } from "react-router-dom";

export default function PostCard({ post, variant = "grid" }) {
  if (!post) return null;

  const rawExcerpt = post.excerpt || post.content || "";
  const excerpt =
    rawExcerpt.length > 120
      ? rawExcerpt.slice(0, 120).trim() + "..."
      : rawExcerpt;

  if (variant === "list") {
    return (
      <article className="group card overflow-hidden transition-all duration-300">
        <Link to={`/blog/${post.id}`} className="block">
          <div className="flex flex-col sm:flex-row items-stretch">
            <div className="relative w-full sm:w-72 md:w-80 h-56 sm:h-auto overflow-hidden shrink-0">
              <img
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                src={post.image}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                  {post.category}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                  {post.readTime && (
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {post.readTime}
                    </span>
                  )}
                  <span className="w-1 h-1 bg-neutral-600 rounded-full" />
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                  {post.title}
                </h3>

                <p className="text-neutral-400 mb-6 text-sm leading-relaxed line-clamp-3">
                  {excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                <div className="flex items-center gap-3">
                  {post.author?.avatar && (
                    <img
                      alt={post.author.name}
                      className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                      src={post.author.avatar}
                      loading="lazy"
                    />
                  )}
                  <div>
                    <p className="text-sm font-medium text-white">
                      {post.author?.name}
                    </p>
                    {post.author?.role && (
                      <p className="text-xs text-neutral-500">
                        {post.author.role}
                      </p>
                    )}
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 group-hover:text-orange-400 transition-colors">
                  <span>اقرأ المقال</span>
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                    <svg
                      className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group card overflow-hidden transition-all duration-300">
      <Link to={`/blog/${post.id}`} className="block h-full flex flex-col">
        <div className="relative h-52 overflow-hidden shrink-0">
          <img
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            src={post.image}
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col justify-between flex-grow">
          <div>
            <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
              {post.readTime && (
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {post.readTime}
                </span>
              )}

              <span className="w-1 h-1 bg-neutral-600 rounded-full" />
              <span>{post.date}</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
              {post.title}
            </h3>

            <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
              {excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[#262626] mt-auto">
            <div className="flex items-center gap-3">
              {post.author?.avatar && (
                <img
                  alt={post.author.name}
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                  src={post.author.avatar}
                  loading="lazy"
                />
              )}

              <div>
                <p className="text-sm font-medium text-white">
                  {post.author?.name}
                </p>

                {post.author?.role && (
                  <p className="text-xs text-neutral-500">
                    {post.author.role}
                  </p>
                )}
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
              <svg
                className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
