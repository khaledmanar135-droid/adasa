export default function ErrorMessage({
  title = "حدث خطأ أثناء تحميل البيانات",
  message,
  onRetry,
}) {
  return (
    <div
      className="max-w-xl mx-auto my-12 p-8 bg-[#161616] border border-red-500/30 rounded-3xl text-center shadow-xl shadow-red-500/5"
      role="alert"
    >
      <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      {message && <p className="text-neutral-400 text-sm mb-6 leading-relaxed">{message}</p>}

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 cursor-pointer shadow-lg shadow-orange-500/20 hover:-translate-y-0.5"
        >
          إعادة المحاولة
        </button>
      )}
    </div>
  );
}
