import Footer from "@/components/Footer.tsx";
import Header from "@/components/Header";
import ProjectsProvider from "@/helpers/Context";
import TProvider from "@/styles/ThemeProvider";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const dark = localStorage.getItem("usehooks-ts-dark-mode");
    if (!dark) {
      localStorage.setItem("usehooks-ts-dark-mode", "false");
    }
  }, []);

  return (
    <TProvider>
      <ProjectsProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ProjectsProvider>
    </TProvider>
  );
}
