import python from "/images/icons/python.png";
import typescript from "/images/icons/typescript.png";
import react from "/images/icons/react.png";
import vue from "/images/icons/vue.png";
import tailwindcss from "/images/icons/tailwindcss.png";
import aws from "/images/icons/aws.png";
import docker from "/images/icons/docker.png";
import django from "/images/icons/django.png";
import fastapi from "/images/icons/fastapi.png";
import nextjs from "/images/icons/nextjs.png";
import git from "/images/icons/git.png";
import github from "/images/icons/github.png";
import postgresql from "/images/icons/postgresql.png";
import mongodb from "/images/icons/mongodb.png";
import linux from "/images/icons/linux.png";
import postman from "/images/icons/postman.png";
import { useLanguage } from "@/context/LanguageContext";

export const Skills = () => {
  const { t } = useLanguage();
  return (
    <>
      <section
        id="skills"
        className="flex min-h-screen scroll-mt-16 flex-col items-center justify-center bg-slate-200 p-8 lg:p-16 xl:scroll-mt-0 xl:p-30 dark:bg-gray-900"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-800 xl:text-5xl dark:text-gray-200">
            {t.techStack.title}
          </h2>
          <p className="mb-6 text-gray-600 lg:text-lg xl:max-w-7xl xl:text-xl dark:text-gray-400">
            {t.techStack.description}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-4 xl:grid-cols-8">
          <div className="flex flex-col items-center rounded-lg border bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:border-yellow-500 hover:bg-gray-100 hover:shadow-yellow-600 dark:bg-gray-800 hover:dark:bg-gray-700">
            <h3 className="mb-2 text-sm text-gray-800 2xl:text-lg dark:text-gray-200">
              Python
            </h3>
            <img src={python} alt="Python" className="h-12 w-12" />
          </div>
          <div className="flex flex-col items-center rounded-lg border bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:border-blue-600 hover:bg-gray-100 hover:shadow-blue-600 dark:bg-gray-800 hover:dark:bg-gray-700">
            <h3 className="mb-2 text-sm text-gray-800 2xl:text-lg dark:text-gray-200">
              TypeScript
            </h3>
            <img src={typescript} alt="TypeScript" className="h-12 w-12" />
          </div>
          <div className="flex flex-col items-center rounded-lg border bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:border-green-500 hover:bg-gray-100 hover:shadow-green-500 dark:bg-gray-800 hover:dark:bg-gray-700">
            <h3 className="mb-2 text-sm text-gray-800 2xl:text-lg dark:text-gray-200">
              Django
            </h3>
            <img src={django} alt="Django" className="h-12 w-12" />
          </div>
          <div className="flex flex-col items-center rounded-lg border bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:border-gray-800 hover:bg-gray-100 hover:shadow-gray-800 dark:bg-gray-800 hover:dark:bg-gray-700">
            <h3 className="mb-2 text-sm text-gray-800 2xl:text-lg dark:text-gray-200">
              FastAPI
            </h3>
            <img src={fastapi} alt="FastAPI" className="h-12 w-12" />
          </div>
          <div className="flex flex-col items-center rounded-lg border bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:border-gray-800 hover:bg-gray-100 hover:shadow-gray-800 dark:bg-gray-800 hover:dark:bg-gray-700">
            <h3 className="mb-2 text-sm text-gray-800 2xl:text-lg dark:text-gray-200">
              Next.js
            </h3>
            <img src={nextjs} alt="Next.js" className="h-12 w-12" />
          </div>
          <div className="flex flex-col items-center rounded-lg border bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:border-blue-400 hover:bg-gray-100 hover:shadow-blue-400 dark:bg-gray-800 hover:dark:bg-gray-700">
            <h3 className="mb-2 text-sm text-gray-800 2xl:text-lg dark:text-gray-200">
              React
            </h3>
            <img src={react} alt="React" className="h-12 w-12" />
          </div>
          <div className="flex flex-col items-center rounded-lg border bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:border-green-500 hover:bg-gray-100 hover:shadow-green-500 dark:bg-gray-800 hover:dark:bg-gray-700">
            <h3 className="mb-2 text-sm text-gray-800 2xl:text-lg dark:text-gray-200">
              Vue
            </h3>
            <img src={vue} alt="Vue" className="h-12 w-12" />
          </div>
          <div className="flex flex-col items-center rounded-lg border bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:border-b-cyan-600 hover:bg-gray-100 hover:shadow-cyan-600 dark:bg-gray-800 hover:dark:bg-gray-700">
            <h3 className="mb-2 text-sm text-gray-800 2xl:text-lg dark:text-gray-200">
              Tailwind CSS
            </h3>
            <img src={tailwindcss} alt="Tailwind CSS" className="h-12 w-12" />
          </div>
          <div className="flex flex-col items-center rounded-lg border bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:border-blue-700 hover:bg-gray-100 hover:shadow-blue-700 dark:bg-gray-800 hover:dark:bg-gray-700">
            <h3 className="mb-2 text-sm text-gray-800 2xl:text-lg dark:text-gray-200">
              PostgreSQL
            </h3>
            <img src={postgresql} alt="PostgreSQL" className="h-12 w-12" />
          </div>
          <div className="flex flex-col items-center rounded-lg border bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:border-green-600 hover:bg-gray-100 hover:shadow-green-600 dark:bg-gray-800 hover:dark:bg-gray-700">
            <h3 className="mb-2 text-sm text-gray-800 2xl:text-lg dark:text-gray-200">
              MongoDB
            </h3>
            <img src={mongodb} alt="MongoDB" className="h-12 w-12" />
          </div>
          <div className="flex flex-col items-center rounded-lg border bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:border-orange-500 hover:bg-gray-100 hover:shadow-orange-500 dark:bg-gray-800 hover:dark:bg-gray-700">
            <h3 className="mb-2 text-sm text-gray-800 2xl:text-lg dark:text-gray-200">
              Git
            </h3>
            <img src={git} alt="Git" className="h-12 w-12" />
          </div>
          <div className="flex flex-col items-center rounded-lg border bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:border-gray-800 hover:bg-gray-100 hover:shadow-gray-800 dark:bg-gray-800 hover:dark:bg-gray-700">
            <h3 className="mb-2 text-sm text-gray-800 2xl:text-lg dark:text-gray-200">
              GitHub
            </h3>
            <img src={github} alt="GitHub" className="h-12 w-12" />
          </div>
          <div className="flex flex-col items-center rounded-lg border bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:border-gray-800 hover:bg-gray-100 hover:shadow-gray-800 dark:bg-gray-800 hover:dark:bg-gray-700">
            <h3 className="mb-2 text-sm text-gray-800 2xl:text-lg dark:text-gray-200">
              Linux
            </h3>
            <img src={linux} alt="Linux" className="h-12 w-12" />
          </div>
          <div className="flex flex-col items-center rounded-lg border bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:border-orange-500 hover:bg-gray-100 hover:shadow-orange-500 dark:bg-gray-800 hover:dark:bg-gray-700">
            <h3 className="mb-2 text-sm text-gray-800 2xl:text-lg dark:text-gray-200">
              Postman
            </h3>
            <img src={postman} alt="Postman" className="h-12 w-12" />
          </div>
          <div className="flex flex-col items-center rounded-lg border bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:border-cyan-500 hover:bg-gray-100 hover:shadow-cyan-500 dark:bg-gray-800 hover:dark:bg-gray-700">
            <h3 className="mb-2 text-sm text-gray-800 2xl:text-lg dark:text-gray-200">
              Docker
            </h3>
            <img src={docker} alt="Docker" className="h-12 w-12" />
          </div>
          <div className="flex flex-col items-center rounded-lg border bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:border-gray-800 hover:bg-gray-100 hover:shadow-gray-800 dark:bg-gray-800 hover:dark:bg-gray-700">
            <h3 className="mb-2 text-sm text-gray-800 2xl:text-lg dark:text-gray-200">
              AWS
            </h3>
            <img src={aws} alt="AWS" className="h-12 w-12" />
          </div>
        </div>
      </section>
    </>
  );
};
