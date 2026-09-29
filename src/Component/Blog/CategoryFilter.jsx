export default function CategoryFilter({
  categories = [],
  selectedCategory = "all",
  onSelectCategory,
  categoryCounts = {},
}) {
  return (
    <div
      className="flex flex-wrap justify-center md:justify-start gap-2"
      role="toolbar"
      aria-label="تصفية حسب التصنيف"
    >
      <button
        type="button"
        onClick={() => onSelectCategory("all")}
        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
          selectedCategory === "all"
            ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md shadow-orange-500/20"
            : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30 hover:text-white"
        }`}
        aria-pressed={selectedCategory === "all"}
      >
        <span>جميع المقالات</span>
        {categoryCounts.all !== undefined && (
          <span
            className={`text-xs px-1.5 py-0.5 rounded-full ${
              selectedCategory === "all"
                ? "bg-white/20 text-white"
                : "bg-[#262626] text-neutral-400"
            }`}
          >
            {categoryCounts.all}
          </span>
        )}
      </button>

      {categories.map((cat) => {
        const isActive = selectedCategory === cat;
        const count = categoryCounts[cat];

        return (
          <button
            key={cat}
            type="button"
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
              isActive
                ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md shadow-orange-500/20"
                : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30 hover:text-white"
            }`}
            aria-pressed={isActive}
          >
            <span>{cat}</span>
            {count !== undefined && (
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-[#262626] text-neutral-400"
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
