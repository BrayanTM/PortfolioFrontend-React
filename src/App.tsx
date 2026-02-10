import { SpeedInsights } from "@vercel/speed-insights/react";
import { Navbar } from "./components/Navbar";
import { LanguageProvider } from "./context/LanguageContext";
import { Home } from "@/components/Home";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <LanguageProvider>
        <Navbar />
        <Home />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        <SpeedInsights />
      </LanguageProvider>
    </>
  );
}

export default App;
