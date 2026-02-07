import { Briefcase } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Experience = () => {
  const { t } = useLanguage();

  return (
    <>
      <section
        id="experience"
        className="flex min-h-screen scroll-mt-16 flex-col items-center justify-center bg-slate-300 p-8 lg:p-16 2xl:scroll-mt-0 2xl:p-32 dark:bg-gray-950"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-800 xl:text-5xl dark:text-gray-200">
            {t.experience.title}
          </h2>
          <p className="mb-6 text-gray-600 lg:text-lg xl:max-w-7xl xl:text-xl dark:text-gray-400">
            {t.experience.description}
          </p>
        </div>
        {/* Timeline */}
        <div className="relative mt-6">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-5 w-px bg-gray-400 md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {t.experience.items.map((exp, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div key={`${exp.company}-${exp.period}`} className="relative">
                  {/* Dot on the line */}
                  <div className="absolute left-5 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-blue-700 bg-slate-300 md:left-1/2 dark:bg-gray-950">
                    <Briefcase className="h-4 w-4 text-blue-700" />
                  </div>

                  {/* Card — full-width right on mobile, alternates on desktop */}
                  <div
                    className={`ml-14 transition-transform duration-300 hover:scale-102 md:ml-0 md:w-[calc(50%-2rem)] xl:max-w-5xl ${
                      isLeft
                        ? "md:mr-auto md:pr-0 md:text-right"
                        : "md:ml-auto md:pl-0 md:text-left"
                    }`}
                  >
                    <div className="rounded-xl border border-gray-400 bg-slate-200 p-6 transition-all hover:border-blue-700 hover:shadow-lg hover:shadow-blue-700 xl:p-8 dark:bg-gray-900">
                      <span className="inline-block rounded-md bg-blue-700/10 px-2.5 py-1 text-xs font-semibold text-blue-700 2xl:text-sm">
                        {exp.period}
                      </span>
                      <h3 className="mt-3 text-lg font-bold text-gray-800 lg:text-lg xl:text-xl dark:text-gray-200">
                        {exp.title}
                      </h3>
                      <p className="mt-1 font-medium text-gray-700 lg:text-lg dark:text-gray-300">
                        {exp.company}
                      </p>
                      <p className="mt-3 leading-relaxed text-gray-600 lg:text-lg dark:text-gray-400">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
