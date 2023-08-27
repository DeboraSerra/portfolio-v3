import { darkTheme, lightTheme } from "@/styles/Theme";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { useTernaryDarkMode } from "usehooks-ts";

const TProvider = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useTernaryDarkMode();

  const theme = isDarkMode ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default TProvider;
