import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { usePosts } from "../../hooks/usePosts";
import { useFilteredPosts } from "../../hooks/useFilteredPosts";
import Loader from "../UI/Loader";
import ErrorMessage from "../UI/ErrorMessage";
import EmptyState from "../UI/EmptyState";
import Pagination from "../UI/Pagination";
import ViewToggle from "../UI/ViewToggle";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import PostList from "./PostList";

export default function Blog() {
  const { posts, loading, error, refetch } = usePosts();
  const [params, setParams] = useSearchParams();

  const search = params.get("search") || "";
  const category = params.get("category") || "all";
  const parsedPage = parseInt(params.get("page") || "1", 10);
  const page = isNaN(parsedPage) ? 1 : parsedPage;
  const view = params.get("view") || "grid";

  const categories = useMemo(
    () => [...new Set(posts.map((p) => p.category))].filter(Boolean),
    [posts]
  );

  const categoryCounts = useMemo(() => {
    const counts = { all: posts.length };
    for (const p of posts) {
      if (p.category) {
        counts[p.category] = (counts[p.category] || 0) + 1;
      }
    }
    return counts;
  }, [posts]);

  const { filtered, visible, totalPages, safePage, totalCount } =
    useFilteredPosts(posts, { search, category, page });

  const handleSearchChange = (val) => {
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (val?.trim()) {
          next.set("search", val.trim());
        } else {
          next.delete("search");
        }
        next.set("page", "1");
        return next;
      },
      { replace: true }
    );
  };

  const handleCategorySelect = (cat) => {
    setParams((prev) => {
      const next = new URLSearchParams(prev);
      if (cat === "all") {
        next.delete("category");
      } else {
        next.set("category", cat);
      }
      next.set("page", "1");
      return next;
    });
  };

  const handlePageChange = (newPage) => {
    setParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("page", String(newPage));
      return next;
    });
  };

  const handleViewChange = (newView) => {
    setParams((prev) => {
      const next = new URLSearchParams(prev);
      if (newView === "list") {
        next.set("view", "list");
      } else {
        next.delete("view");
      }
      return next;
    });
  };

  const handleClearFilters = () => {
    setParams((prev) => {
      const next = new URLSearchParams(prev);
      next.delete("search");
      next.delete("category");
      next.set("page", "1");
      return next;
    });
  };

  return (
    <main className="flex-grow pt-20">
      <div className="min-h-screen bg-[#0a0a0a]">
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-label inline-flex items-center gap-2 mb-6">
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
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              مدونتنا
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              استكشف <span className="gradient-text">مقالاتنا</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              اكتشف الدروس والرؤى وأفضل الممارسات للتصوير الفوتوغرافي الحديث
            </p>
          </div>
        </div>

        <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <SearchBar
                value={search}
                onChange={handleSearchChange}
                placeholder="ابحث في المقالات والعناوين..."
              />
              <CategoryFilter
                categories={categories}
                selectedCategory={category}
                onSelectCategory={handleCategorySelect}
                categoryCounts={categoryCounts}
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-[146px]">
          {loading && <Loader message="جاري تحميل مقالات المدونة..." />}

          {!loading && error && (
            <ErrorMessage
              title="تعذر تحميل مقالات المدونة"
              message={error}
              onRetry={refetch}
            />
          )}

          {!loading && !error && (
            <>
              <div className="mb-8 flex items-center justify-between">
                <p className="text-neutral-400 text-sm">
                  عرض{" "}
                  <span className="font-bold text-white">
                    {visible.length}
                  </span>{" "}
                  من أصل{" "}
                  <span className="font-bold text-white">{totalCount}</span>{" "}
                  مقالاً
                  {(search || category !== "all") && (
                    <span className="text-orange-400 mr-1.5">(مُصفاة)</span>
                  )}
                </p>

                <ViewToggle
                  currentView={view}
                  onViewChange={handleViewChange}
                />
              </div>

              {filtered.length === 0 ? (
                <EmptyState
                  title="لم يتم العثور على أي مقالات"
                  message={
                    search
                      ? `لم نجد أي مقال يطابق البحث عن "${search}" في تصنيف "${
                          category === "all" ? "جميع المقالات" : category
                        }".`
                      : `لا توجد مقالات متوفرة في تصنيف "${category}".`
                  }
                  onClearFilters={handleClearFilters}
                />
              ) : (
                <>
                  <PostList posts={visible} view={view} />

                  <Pagination
                    currentPage={safePage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
