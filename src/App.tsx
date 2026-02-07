import { SpeedInsights } from "@vercel/speed-insights/react";
import { Navbar } from "./components/Navbar";
import { LanguageProvider } from "./context/LanguageContext";
import { Home } from "@/components/Home";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <LanguageProvider>
        <Navbar />
        <Home />
        <Skills />
        <SpeedInsights />
      </LanguageProvider>
    </>
  );
}

export default App;
