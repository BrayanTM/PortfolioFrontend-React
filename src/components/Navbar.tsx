import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun, Menu, X } from "lucide-react";
import { setLocalStorage } from "@/store/setLocalStorage.store";
import { useLanguage } from "@/context/LanguageContext";

export const Navbar = () => {
  const { getItemFromStorage, setItemToStorage } = setLocalStorage();
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const storedTheme = getItemFromStorage("theme");
    return (storedTheme as "light" | "dark") || "light";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 h-16 w-full border-y border-gray-400 bg-slate-300/75 p-4 shadow-md backdrop-blur-md dark:bg-gray-950/75">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="text-2xl font-bold text-gray-800 dark:text-slate-100">
            {t.navbar.logo}
          </div>
          {isMenuOpen ? (
            <div className="absolute top-16 left-0 flex w-full flex-col border-y border-gray-400 bg-slate-300 py-4 md:hidden dark:bg-gray-950">
              <a
                href="#home"
                className="px-4 py-2 text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
              >
                {t.navbar.home}
              </a>
              <a
                href="#skills"
                className="px-4 py-2 text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
              >
                {t.navbar.skills}
              </a>
              <a
                href="#experience"
                className="px-4 py-2 text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
              >
                {t.navbar.experience}
              </a>
              <a
                href="#projects"
                className="px-4 py-2 text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
              >
                {t.navbar.projects}
              </a>
              <a
                href="#contact"
                className="px-4 py-2 text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
              >
                {t.navbar.contact}
              </a>
            </div>
          ) : (
            <div className="hidden md:flex md:items-center md:space-x-4">
              <a
                href="#home"
                className="mx-2 text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
              >
                {t.navbar.home}
              </a>
              <a
                href="#skills"
                className="mx-2 text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
              >
                {t.navbar.skills}
              </a>
              <a
                href="#experience"
                className="mx-2 text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
              >
                {t.navbar.experience}
              </a>
              <a
                href="#projects"
                className="mx-2 text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
              >
                {t.navbar.projects}
              </a>
              <a
                href="#contact"
                className="mx-2 text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
              >
                {t.navbar.contact}
              </a>
            </div>
          )}

          {/* Toggle Theme */}
          <div className="flex items-center space-x-2">
            <Switch
              id="theme-toggle"
              checked={theme === "light"}
              onCheckedChange={(checked) => {
                setTheme(checked ? "light" : "dark");
                setItemToStorage("theme", checked ? "light" : "dark");
              }}
              thumbContent={
                theme === "light" ? (
                  <Sun className="size-3" />
                ) : (
                  <Moon className="size-3" />
                )
              }
            />
            {/* Toggle Lang */}
            <Switch
              id="lang-toggle"
              checked={language === "en"}
              onCheckedChange={(checked) => {
                setLanguage(checked ? "en" : "es");
              }}
              thumbContent={
                <span
                  className="text-[10px] font-bold"
                  style={
                    language === "en" && theme === "dark"
                      ? { color: "white" }
                      : { color: "black" }
                  }
                >
                  {language === "en" ? "EN" : "ES"}
                </span>
              }
            />
            <button
              className="ml-4 bg-transparent p-2 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="size-4 text-gray-500" />
              ) : (
                <Menu className="size-4 text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
