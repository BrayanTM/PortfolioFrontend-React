import { ArrowDown, Download } from "lucide-react";
import confetti from "canvas-confetti";
import profile from "/images/profile.jpg";
import { useLanguage } from "@/context/LanguageContext";

export const Home = () => {
  const { t } = useLanguage();
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/downloads/cv.pdf";
    link.download = "José_Tebelán_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <>
      <section
        id="home"
        className="flex min-h-screen scroll-mt-16 flex-col items-center justify-center bg-slate-300 p-8 pt-24 dark:bg-gray-950"
      >
        <div className="flex flex-col items-center justify-center text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="md:mr-16 md:w-1/2">
            <div className="flex max-w-3xl flex-col items-center text-center md:items-start md:text-left">
              <h1 className="mb-4 text-5xl font-bold text-gray-800 md:text-6xl dark:text-gray-200">
                {t.home.greeting} <p className="text-blue-600">{t.home.name}</p>
              </h1>
              <h1 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-gray-200">
                {t.home.title}
              </h1>
              <p className="mb-3 text-lg text-gray-600 dark:text-gray-400">
                {t.home.description}
              </p>
            </div>
            <div className="mt-3 flex flex-row items-center justify-center space-x-4 text-gray-800 md:justify-start dark:text-gray-200">
              <a
                href="#projects"
                className="flex items-center rounded-md border bg-blue-600 px-2 py-2 text-white transition-colors duration-300 hover:bg-blue-800 md:px-4 dark:bg-blue-600 dark:hover:bg-blue-400"
              >
                {t.home.projectsButton}
                <ArrowDown className="ml-1 h-4 w-4 md:ml-4" />
              </a>
              <a
                href="#"
                className="flex items-center rounded-md border border-gray-400 px-2 py-2 transition-colors duration-300 hover:bg-gray-200 md:px-4 dark:border-gray-600 dark:hover:bg-gray-700"
                onClick={handleDownloadCV}
              >
                <Download className="mr-1 h-4 w-4 md:mr-4" />
                {t.home.downloadCVButton}
              </a>
            </div>
          </div>
          <div className="mt-12 w-64 rounded-full border-4 border-blue-950 md:w-80">
            <div className="overflow-hidden rounded-full md:items-end">
              <img src={profile} alt="José Tebelán" className="rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
