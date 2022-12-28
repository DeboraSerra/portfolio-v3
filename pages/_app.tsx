import type { AppProps } from "next/app";
import TProvider from "../components/helpers/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TProvider>
      <Component {...pageProps} />
    </TProvider>
  );
}
