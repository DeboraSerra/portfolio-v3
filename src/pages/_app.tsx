import Footer from "@/components/Footer.tsx";
import Header from "@/components/Header";
import ProjectsProvider from "@/helpers/Context";
import TProvider from "@/styles/ThemeProvider";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [dark, setDark] = useState(false);

  const getMatchMedia = () => {
    if (window.matchMedia) {
      const query = window.matchMedia("prefers-color-scheme: dark");
      localStorage.setItem("use-dark-mode", query.matches ? "true" : "false");
      setDark(query.matches);
    }
  };

  const toggleDarkMode = () => {
    setDark(!dark);
    localStorage.setItem("use-dark-mode", JSON.stringify(!dark));
  };

  useEffect(() => {
    const darkLocal = localStorage.getItem("use-dark-mode");
    if (!darkLocal) getMatchMedia();
    else {
      setDark(JSON.parse(darkLocal));
    }
  }, []);

  return (
    <TProvider isDarkMode={dark}>
      <ProjectsProvider>
        <Header isDarkMode={dark} toggleDarkMode={toggleDarkMode} />
        <Component {...pageProps} />
        <Footer />
      </ProjectsProvider>
    </TProvider>
  );
}
