import { useState, useEffect, useRef } from "react";

export default function SearchBar({
  value = "",
  onChange,
  placeholder = "ابحث في المقالات والعناوين...",
}) {
  const [prevValue, setPrevValue] = useState(value);
  const [query, setQuery] = useState(value);
  const isFirst = useRef(true);

  if (value !== prevValue) {
    setPrevValue(value);
    setQuery(value);
  }

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    const timer = setTimeout(() => {
      if (query !== value) {
        onChange(query);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [query, onChange, value]);

  const handleClear = () => {
    setQuery("");
    onChange("");
  };

  return (
    <div className="relative w-full md:w-80" role="search">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="input-dark w-full px-5 py-3 pr-12 pl-10 text-sm"
        aria-label="ابحث في المقالات"
      />

      <svg
        className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      {query && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full bg-[#262626] text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors text-xs cursor-pointer"
          aria-label="مسح البحث"
        >
          ✕
        </button>
      )}
    </div>
  );
}
