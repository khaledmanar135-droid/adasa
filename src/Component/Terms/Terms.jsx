import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <main className="flex-grow pt-24 pb-20 min-h-screen bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 pb-8 border-b border-[#262626]">
          <span className="section-label inline-flex items-center gap-2 mb-4">
            الشروط القانونية
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            شروط <span className="gradient-text">الاستخدام</span>
          </h1>
          <p className="text-sm text-neutral-500">
            آخر تحديث: 15 يناير 2026
          </p>
        </header>

        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section className="p-8 rounded-3xl bg-[#161616] border border-[#262626]">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full" />
              1. المقدمة والموافقة على الشروط
            </h2>
            <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
              أهلاً بكم في منصة عدسة (Adasa). من خلال وصولك إلى هذه المنصة أو استخدامك لمحتواها، فإنك توافق التام على الالتزام بكافة الشروط والأحكام المبينة هنا، فضلاً عن أي قوانين أو لوائح سارية. إذا كنت لا توافق على هذه الشروط، يرجى الامتناع عن استخدام المنصة.
            </p>
          </section>

          <section className="p-8 rounded-3xl bg-[#161616] border border-[#262626]">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full" />
              2. حقوق الملكية الفكرية
            </h2>
            <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
              كافة المحتويات المنشورة على منصة عدسة، بما في ذلك المقالات التعليمية، النصوص، الرسوم البيانية، الشعارات، والصور الفوتوغرافية، هي ملك حصري لمنصة عدسة أو كتابها ومصوريها ومرخصة أصولاً. يُحظر تماماً نسخ أو إعادة نشر أو بيع أي محتوى بدون الحصول على إذن كتابي رسمي.
            </p>
          </section>

          <section className="p-8 rounded-3xl bg-[#161616] border border-[#262626]">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full" />
              3. الاستخدام العادل للأدلة والدروس
            </h2>
            <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
              تُتاح المقالات والأدلة التعليمية المنشورة على الموقع للاستخدام الفردي والتطوير الشخصي للمصورين. يُسمح بمشاركة روابط المقالات عبر شبكات التواصل الاجتماعي طالما نُسب المحتوى بشكل واضح وصريح لمنصة عدسة وكتّابها.
            </p>
          </section>

          <section className="p-8 rounded-3xl bg-[#161616] border border-[#262626]">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full" />
              4. إخلاء المسؤولية
            </h2>
            <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
              تُقدم جميع النصائح التقنية وإرشادات السلامة في جلسات التصوير الخارجية "كما هي" دون أي ضمانات ضمنية. يتحمل المصور مسؤوليته الكاملة عن سلامته وسلامة معداته أثناء جلسات التصوير في المواقع الوعرة أو الظروف المناخية القاسية.
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
              to="/privacy"
              className="text-neutral-400 hover:text-white transition-colors text-sm"
            >
              سياسة الخصوصية &larr;
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
