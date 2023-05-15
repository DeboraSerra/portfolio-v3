import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import ProjectsProvider from "@/helpers/Context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProjectsProvider>
      <Header />
      <Component {...pageProps} />
    </ProjectsProvider>
  );
}
