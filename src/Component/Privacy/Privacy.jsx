import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <main className="flex-grow pt-24 pb-20 min-h-screen bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 pb-8 border-b border-[#262626]">
          <span className="section-label inline-flex items-center gap-2 mb-4">
            الخصوصية والأمان
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            سياسة <span className="gradient-text">الخصوصية</span>
          </h1>
          <p className="text-sm text-neutral-500">
            آخر تحديث: 15 يناير 2026
          </p>
        </header>

        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section className="p-8 rounded-3xl bg-[#161616] border border-[#262626]">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full" />
              1. التزامنا بالخصوصية
            </h2>
            <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
              تولي منصة عدسة (Adasa) أقصى درجات الأهمية لخصوصية زوارها ومستخدميها. توضح هذه الوثيقة طبيعة المعلومات التي نتعامل معها أثناء تصفحكم للمنصة وكيفية الحفاظ على أمان بياناتكم.
            </p>
          </section>

          <section className="p-8 rounded-3xl bg-[#161616] border border-[#262626]">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full" />
              2. بيئة الواجهة الأمامية وعدم جمع البيانات
            </h2>
            <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
              تم بناء منصة عدسة كتطبيق يعمل كلياً على الواجهة الأمامية للمتصفح (Client-Side). لا نقوم بجمع أو حفظ أو إرسال أي بيانات تعريف شخصية أو سجلات تصفح إلى أي خوادم خارجية سرية.
            </p>
          </section>

          <section className="p-8 rounded-3xl bg-[#161616] border border-[#262626]">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full" />
              3. معلمات الرابط وتفضيلات التصفح
            </h2>
            <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
              تفضيلات البحث، والتصنيفات المختارة، وأرقام الصفحات، ونمط العرض (شبكي أو قائمة) تُدار حصرياً من خلال الرابط (URL Search Parameters) في متصفحك الخاص، لتمكينك من مشاركة الروابط واسترجاع نتائج التصفح بدقة دون أي تخزين خفي.
            </p>
          </section>

          <section className="p-8 rounded-3xl bg-[#161616] border border-[#262626]">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full" />
              4. ملفات تعريف الارتباط والطرف الثالث
            </h2>
            <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
              لا تستخدم منصة عدسة ملفات تعريف ارتباط لتتبع الإعلانات أو الاستهداف السلوكي. الصور الفوتوغرافية المعروضة يتم تحميلها بأمان عبر شبكات توزيع محتوى موثوقة (Unsplash CDN).
            </p>
          </section>

          <div className="pt-6 border-t border-[#262626] flex justify-between items-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors font-medium text-sm"
            >
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span>العودة إلى الصفحة الرئيسية</span>
            </Link>

            <Link
              to="/terms"
              className="text-neutral-400 hover:text-white transition-colors text-sm"
            >
              شروط الاستخدام &larr;
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
