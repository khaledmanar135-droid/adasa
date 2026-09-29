import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPostById } from "../../services/postsService";
import Loader from "../UI/Loader";

export default function PostDetails() {
  const { id } = useParams();
  const [prevId, setPrevId] = useState(id);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  if (id !== prevId) {
    setPrevId(id);
    setLoading(true);
    setError(null);
    setPost(null);
  }

  useEffect(() => {
    let mounted = true;

    fetchPostById(id)
      .then((data) => {
        if (mounted) {
          setPost(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err.message || "المقال غير موجود");
          setPost(null);
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <main className="flex-grow pt-24 pb-20 min-h-screen bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Loader message="جاري تحميل تفاصيل المقال..." />
        </div>
      </main>
    );
  }

  if (error || !post) {
    return (
      <main className="flex-grow pt-24 pb-20 min-h-screen bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            المقال غير موجود
          </h1>
          <p className="text-neutral-400 text-base leading-relaxed mb-8">
            عذراً، لم نتمكن من العثور على المقال المطلوب رقم #{id}. ربما تم نقله أو حذفه.
          </p>
          <Link
            to="/blog"
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>العودة إلى المدونة</span>
            <svg
              className="w-4 h-4 rotate-180"
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
          </Link>
        </div>
      </main>
    );
  }

  const renderContent = (text) => {
    if (!text) return null;
    return text.split("\n\n").map((block, idx) => {
      const trimmed = block.trim();
      if (trimmed.startsWith("## ")) {
        return (
          <h2
            key={idx}
            className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4 flex items-center gap-3"
          >
            <span className="w-1.5 h-6 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full" />
            <span>{trimmed.replace("## ", "")}</span>
          </h2>
        );
      }
      return (
        <p
          key={idx}
          className="text-neutral-300 text-base md:text-lg leading-relaxed mb-6"
        >
          {trimmed}
        </p>
      );
    });
  };

  return (
    <main className="flex-grow pt-24 pb-20 min-h-screen bg-[#0a0a0a]">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-orange-500 transition-colors duration-200 group"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
            <span>العودة إلى قائمة المقالات</span>
          </Link>
        </div>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3.5 py-1.5 bg-orange-500/10 text-orange-500 text-sm font-semibold rounded-full border border-orange-500/20">
              {post.category}
            </span>
            {post.featured && (
              <span className="px-3.5 py-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-sm font-semibold rounded-full">
                مميز
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-[#161616] border border-[#262626]">
            <div className="flex items-center gap-3.5">
              {post.author?.avatar && (
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-orange-500/20"
                />
              )}
              <div>
                <p className="text-base font-semibold text-white">
                  {post.author?.name}
                </p>
                {post.author?.role && (
                  <p className="text-xs text-neutral-400">
                    {post.author.role}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-neutral-400">
              <time dateTime={post.date} className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-neutral-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{post.date}</span>
              </time>

              {post.readTime && (
                <>
                  <span className="w-1 h-1 bg-neutral-600 rounded-full" />
                  <span className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-neutral-500"
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
                    <span>{post.readTime}</span>
                  </span>
                </>
              )}
            </div>
          </div>
        </header>

        {post.image && (
          <div className="relative mb-12 rounded-3xl overflow-hidden border border-[#262626] shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[320px] sm:h-[420px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        )}

        {post.excerpt && (
          <div className="p-6 mb-10 rounded-2xl bg-orange-500/5 border-r-4 border-orange-500 text-lg md:text-xl font-medium text-neutral-200 leading-relaxed">
            {post.excerpt}
          </div>
        )}

        <div className="prose prose-invert max-w-none">
          {renderContent(post.content || post.excerpt)}
        </div>

        {post.tags && post.tags.length > 0 && (
          <footer className="mt-12 pt-8 border-t border-[#262626] flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-neutral-400">
              الوسوم ذات الصلة:
            </span>
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#161616] text-neutral-300 border border-[#262626] hover:border-orange-500/40 hover:text-orange-400 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </footer>
        )}

        <div className="mt-12 p-8 rounded-3xl bg-[#161616] border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">
              أعجبك هذا المقال؟
            </h3>
            <p className="text-sm text-neutral-400">
              تصفح المزيد من الدروس والنصائح في مدونتنا الشاملة.
            </p>
          </div>
          <Link
            to="/blog"
            className="btn-primary text-sm whitespace-nowrap"
          >
            تصفح المزيد من المقالات
          </Link>
        </div>
      </article>
    </main>
  );
}
