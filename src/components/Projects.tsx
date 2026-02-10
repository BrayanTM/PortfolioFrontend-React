import { SquareArrowOutUpRight } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const { t, language } = useLanguage();
  return (
    <>
      <section
        id="projects"
        className="flex min-h-screen scroll-mt-16 flex-col items-center justify-center bg-slate-200 p-8 lg:p-16 2xl:scroll-mt-0 2xl:p-32 dark:bg-gray-900"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-800 xl:text-5xl dark:text-gray-200">
            {t.projects.title}
          </h2>
          <p className="mb-6 text-gray-600 lg:text-lg xl:max-w-7xl xl:text-xl dark:text-gray-400">
            {t.projects.description}
          </p>
        </div>
        {/* Project cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:max-w-7xl">
          {t.projects.items.map((project, index) => (
            <ProjectCard
              key={`${language}-${project.title}-${index}`}
              project={project}
              techStackLabel={t.projects.techStack}
              demoLabel={t.projects.demo}
            />
          ))}
        </div>
        <div className="mt-8">
          <a
            href="https://github.com/BrayanTM"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-md border-2 bg-blue-600 px-2 py-2 text-white transition-colors duration-300 hover:border-blue-500 hover:bg-blue-800 md:px-4 lg:text-lg dark:bg-blue-600 hover:dark:border-blue-700 dark:hover:bg-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336 9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2"
                clip-rule="evenodd"
              ></path>
            </svg>
            {t.projects.viewAllProjects}
            <SquareArrowOutUpRight className="ml-2 inline-block h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
};
