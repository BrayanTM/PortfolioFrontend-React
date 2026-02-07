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
      origin: { y: 0.8 },
    });
  };

  return (
    <>
      <section
        id="home"
        className="flex min-h-screen scroll-mt-16 flex-col items-center justify-center bg-slate-300 p-8 pt-24 md:p-12 lg:p-16 xl:p-30 dark:bg-gray-950"
      >
        <div className="flex flex-col items-center justify-center text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="md:w-1/2">
            <div className="flex flex-col items-center text-center md:items-start md:text-left lg:mt-12">
              <div className="lg:flex lg:flex-row lg:items-baseline lg:space-x-4">
                <h1 className="mb-4 text-5xl font-bold text-gray-800 xl:text-6xl dark:text-gray-200">
                  {t.home.greeting}
                </h1>
                <h1 className="mb-6 text-5xl font-bold text-blue-600 xl:text-6xl">
                  {t.home.name}
                </h1>
              </div>
              <h1 className="mb-6 text-xl font-semibold text-gray-800 lg:text-2xl dark:text-gray-200">
                {t.home.title}
              </h1>
              <p className="text-md mb-3 text-gray-600 lg:text-lg xl:text-xl dark:text-gray-400">
                {t.home.description}
              </p>
            </div>
            <div className="mt-3 flex flex-row justify-center space-x-4 text-gray-800 md:justify-start dark:text-gray-200">
              <a
                href="#projects"
                className="flex items-center rounded-md border bg-blue-600 px-2 py-2 text-white transition-colors duration-300 hover:bg-blue-800 md:px-4 lg:text-lg dark:bg-blue-600 dark:hover:bg-blue-400"
              >
                {t.home.projectsButton}
                <ArrowDown className="ml-1 h-4 w-4 lg:ml-4 lg:h-6 lg:w-6" />
              </a>
              <a
                href="#"
                className="flex items-center rounded-md border border-gray-400 px-2 py-2 transition-colors duration-300 hover:bg-gray-200 md:px-4 lg:text-lg dark:border-gray-600 dark:hover:bg-gray-700"
                onClick={handleDownloadCV}
              >
                <Download className="mr-1 h-4 w-4 lg:mr-4 lg:h-6 lg:w-6" />
                {t.home.downloadCVButton}
              </a>
            </div>
          </div>
          <div className="mt-8 md:flex md:w-1/2 md:justify-end xl:justify-center">
            <div className="w-64 rounded-full border-4 border-blue-950 md:w-70 lg:w-90">
              <img src={profile} alt="José Tebelán" className="rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
