import { SpeedInsights } from "@vercel/speed-insights/react";
import { Navbar } from "./components/Navbar";
import { LanguageProvider } from "./context/LanguageContext";
import { Home } from "@/components/Home";

function App() {
  return (
    <>
      <LanguageProvider>
        <Navbar />
        <Home />
        <SpeedInsights />
      </LanguageProvider>
    </>
  );
}

export default App;
