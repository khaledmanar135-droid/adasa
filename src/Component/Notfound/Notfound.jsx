import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <main className="flex-grow pt-24 pb-20 min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl -z-10" />
          <span className="text-8xl sm:text-9xl font-black gradient-text tracking-tighter block leading-none">
            404
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          الصفحة غير موجودة
        </h1>

        <p className="text-neutral-400 text-base leading-relaxed mb-8 max-w-md mx-auto">
          عذراً، الصفحة التي تبحث عنها غير متوفرة أو ربما تم تغيير مسارها أو حذفها.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="btn-primary w-full sm:w-auto text-sm">
            الصفحة الرئيسية
          </Link>
          <Link
            to="/blog"
            className="btn-secondary w-full sm:w-auto text-sm"
          >
            استكشف المدونة
          </Link>
        </div>
      </div>
    </main>
  );
}
