export default function ViewToggle({ currentView = "grid", onViewChange }) {
  const isGrid = currentView !== "list";

  return (
    <div
      className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1"
      role="group"
      aria-label="نمط عرض المقالات"
    >
      <button
        type="button"
        onClick={() => onViewChange("grid")}
        className={`p-2 rounded-lg transition-all duration-300 cursor-pointer ${
          isGrid
            ? "bg-orange-500 text-white shadow-sm"
            : "text-neutral-400 hover:text-white"
        }`}
        aria-label="عرض شبكي"
        aria-pressed={isGrid}
        title="عرض شبكي"
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
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => onViewChange("list")}
        className={`p-2 rounded-lg transition-all duration-300 cursor-pointer ${
          !isGrid
            ? "bg-orange-500 text-white shadow-sm"
            : "text-neutral-400 hover:text-white"
        }`}
        aria-label="عرض قائمة"
        aria-pressed={!isGrid}
        title="عرض قائمة"
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
}
