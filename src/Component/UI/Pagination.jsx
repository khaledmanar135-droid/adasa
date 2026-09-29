export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageClick = (page) => {
    onPageChange(page);
    window.scrollTo({
      top: 350,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className="flex flex-col items-center gap-4 mt-12 mb-8"
      aria-label="تنقل صفحات المقالات"
    >
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage <= 1}
          className={`p-3 rounded-xl border transition-all duration-300 flex items-center justify-center ${
            currentPage <= 1
              ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
              : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a] cursor-pointer"
          }`}
          aria-label="الصفحة السابقة"
        >
          <svg
            className="w-5 h-5"
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
        </button>

        <div className="flex items-center gap-1.5">
          {pages.map((p) => {
            const isCurrent = p === currentPage;
            return (
              <button
                key={p}
                type="button"
                onClick={() => handlePageClick(p)}
                className={`min-w-[44px] h-11 px-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isCurrent
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md shadow-orange-500/20"
                    : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                }`}
                aria-current={isCurrent ? "page" : undefined}
                aria-label={`الصفحة ${p}`}
              >
                {p}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className={`p-3 rounded-xl border transition-all duration-300 flex items-center justify-center ${
            currentPage >= totalPages
              ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
              : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a] cursor-pointer"
          }`}
          aria-label="الصفحة التالية"
        >
          <svg
            className="w-5 h-5 rotate-180"
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
        </button>
      </div>

      <p className="text-center text-neutral-500 text-sm">
        صفحة {currentPage} من {totalPages}
      </p>
    </nav>
  );
}
