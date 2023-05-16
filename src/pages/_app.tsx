import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import ProjectsProvider from "@/helpers/Context";
import TProvider from "@/styles/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TProvider>
      <ProjectsProvider>
        <Header />
        <Component {...pageProps} />
      </ProjectsProvider>
    </TProvider>
  );
}
