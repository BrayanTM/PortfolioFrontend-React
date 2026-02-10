import { SpeedInsights } from "@vercel/speed-insights/react";
import { Navbar } from "./components/Navbar";
import { LanguageProvider } from "./context/LanguageContext";
import { Home } from "@/components/Home";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <LanguageProvider>
        <Navbar />
        <Home />
        <Skills />
        <Experience />
        <Projects />
        <SpeedInsights />
      </LanguageProvider>
    </>
  );
}

export default App;
