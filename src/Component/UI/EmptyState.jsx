export default function EmptyState({
  title = "لم نجد أي مقالات",
  message = "لا توجد مقالات تطابق بحثك أو تصنيفك المحدد.",
  onClearFilters,
}) {
  return (
    <div
      className="max-w-lg mx-auto my-16 p-10 bg-[#161616] border border-[#262626] rounded-3xl text-center"
      role="region"
      aria-label="نتائج فارغة"
    >
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed mb-6">{message}</p>

      {onClearFilters && (
        <button
          type="button"
          onClick={onClearFilters}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 cursor-pointer shadow-lg shadow-orange-500/20 hover:-translate-y-0.5"
          aria-label="مسح الفلاتر وإعادة ضبط البحث"
        >
          <span>مسح جميع الفلاتر</span>
          <span className="text-lg leading-none" aria-hidden="true">&times;</span>
        </button>
      )}
    </div>
  );
}
