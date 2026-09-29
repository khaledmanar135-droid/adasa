export default function Loader({ message = "جاري تحميل المقالات..." }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-24 px-4 text-center"
      role="status"
      aria-live="polite"
    >
      <div className="relative w-16 h-16 mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-orange-500/20 animate-ping" />
        <div className="w-16 h-16 rounded-full border-4 border-t-orange-500 border-r-orange-400 border-b-transparent border-l-transparent animate-spin" />
      </div>
      <p className="text-neutral-400 text-base font-medium animate-pulse">{message}</p>
    </div>
  );
}
