import '../styles/global.css';
import type { AppProps } from "next/app";
import Header from "../components/Header/Header";
import TProvider from "../components/helpers/ThemeProvider";
import Footer from '../components/Footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </TProvider>
  );
}
