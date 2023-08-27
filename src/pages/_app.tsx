import Footer from "@/components/Footer.tsx";
import Header from "@/components/Header";
import ProjectsProvider from "@/helpers/Context";
import TProvider from "@/styles/ThemeProvider";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
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
