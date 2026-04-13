import { useEffect } from "react";
import AppDetails from "./components/AppDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Reviews from "./components/Reviews";
import useTheme from "./context/useTheme";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  
  return (
    <>
      <main
        className={`w-full min-h-screen flex flex-col items-center overflow-x-hidden ${
          theme === "dark" ? "bg-[#2B2B2B] text-white" : "bg-white text-black"
        }`}
      >
        <Header />
        <section className="w-full max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-25">
          <LandingPage />
          <AppDetails />
          <Reviews />
          <Contact />
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
