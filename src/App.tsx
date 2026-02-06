import { SpeedInsights } from "@vercel/speed-insights/react";
import { Navbar } from "./components/Navbar";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <>
      <LanguageProvider>
        <Navbar />
        <SpeedInsights />
      </LanguageProvider>
    </>
  );
}

export default App;
