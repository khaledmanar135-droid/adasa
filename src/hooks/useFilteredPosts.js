import { useMemo } from "react";

const PAGE_SIZE = 6;

export function useFilteredPosts(posts = [], { search = "", category = "all", page = 1 } = {}) {
  const filtered = useMemo(() => {
    const q = (search || "").trim().toLowerCase();
    const activeCat = category || "all";

    return posts
      .filter((p) => activeCat === "all" || p.category === activeCat)
      .filter((p) => {
        if (!q) return true;
        return (
          p.title?.toLowerCase().includes(q) ||
          p.content?.toLowerCase().includes(q) ||
          p.excerpt?.toLowerCase().includes(q)
        );
      });
  }, [posts, category, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const parsedPage = parseInt(page, 10);
  const safePage = Math.min(Math.max(isNaN(parsedPage) ? 1 : parsedPage, 1), totalPages);

  const visible = useMemo(() => {
    return filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);
  }, [filtered, safePage]);

  return {
    filtered,
    visible,
    totalPages,
    safePage,
    totalCount: filtered.length,
    postsPerPage: PAGE_SIZE,
  };
}

export default useFilteredPosts;
