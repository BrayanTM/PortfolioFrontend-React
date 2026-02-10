import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from "react";

export const Contact = () => {
  const { t } = useLanguage();
  useEffect(() => {
    // Cargar el script de LinkedIn
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <section id="contact">
        <div className="flex min-h-screen scroll-mt-16 flex-col items-center justify-center bg-slate-300 p-8 lg:p-16 xl:scroll-mt-0 xl:p-30 dark:bg-gray-950">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800 xl:text-5xl dark:text-gray-200">
              {t.contact.title}
            </h2>
            <p className="mb-6 text-gray-600 lg:text-lg xl:max-w-7xl xl:text-xl dark:text-gray-400">
              {t.contact.description}
            </p>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center md:flex-row">
            <div
              className="badge-base LI-profile-badge"
              data-locale="es_ES"
              data-size="large"
              data-theme="dark"
              data-type="HORIZONTAL"
              data-vanity="josebtm"
              data-version="v1"
            ></div>
            <div className="mt-4 p-6 md:mt-0 md:ml-8 xl:p-8">
              <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                {t.contact.connectWithMe}
              </h1>
              <h3 className="mt-4 text-gray-700 dark:text-gray-400">
                {t.contact.alsoFindMe}
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/BrayanTM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-md border-2 bg-blue-600 px-2 py-2 text-white transition-colors duration-300 hover:border-blue-500 hover:bg-blue-800 md:px-4 lg:text-lg dark:bg-blue-600 hover:dark:border-blue-700 dark:hover:bg-blue-400"
                >
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336 9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/josebtm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-md border-2 bg-blue-600 px-2 py-2 text-white transition-colors duration-300 hover:border-blue-500 hover:bg-blue-800 md:px-4 lg:text-lg dark:bg-blue-600 hover:dark:border-blue-700 dark:hover:bg-blue-400"
                >
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.983 2.821a2.188 2.188 0 1 0 0 4.376 2.188 2.188 0 1 0 0-4.376m4.254 6.034v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z"></path>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="mailto:brayantebelan-work@outlook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-md border-2 bg-blue-600 px-2 py-2 text-white transition-colors duration-300 hover:border-blue-500 hover:bg-blue-800 md:px-4 lg:text-lg dark:bg-blue-600 hover:dark:border-blue-700 dark:hover:bg-blue-400"
                >
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64"></path>
                  </svg>
                  Email
                </a>
                <a
                  href="https://wa.me/50249611233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-md border-2 bg-blue-600 px-2 py-2 text-white transition-colors duration-300 hover:border-blue-500 hover:bg-blue-800 md:px-4 lg:text-lg dark:bg-blue-600 hover:dark:border-blue-700 dark:hover:bg-blue-400"
                >
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18.403 5.633A8.92 8.92 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a9 9 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.93 8.93 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.45 7.45 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.45 7.45 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.4 7.4 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73s-.354-.112-.504.112-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393s.149-.224.224-.374.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a10 10 0 0 0-.429-.008.83.83 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321 1.582 2.415 3.832 3.387c.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066s.187-.973.131-1.067-.207-.151-.43-.263"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Whatsapp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
