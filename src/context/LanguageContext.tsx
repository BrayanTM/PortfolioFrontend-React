import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import es from "@/locales/es.json";
import en from "@/locales/en.json";
import { setLocalStorage } from "@/store/setLocalStorage.store";

// Infiere el tipo de las traducciones basándose en el archivo español
export type Translations = typeof es;
type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("es");
  const { getItemFromStorage, setItemToStorage } = setLocalStorage();

  useEffect(() => {
    const storedLang = getItemFromStorage("lang");
    if (storedLang === "en" || storedLang === "es") {
      setLanguageState(storedLang);
    }
  }, [getItemFromStorage]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setItemToStorage("lang", lang);
  };

  // Selecciona el diccionario basado en el estado actual
  const t = language === "en" ? en : es;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
