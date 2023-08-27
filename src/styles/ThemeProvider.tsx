import { darkTheme, lightTheme } from "@/styles/Theme";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const TProvider = ({
  children,
  isDarkMode,
}: {
  children: ReactNode;
  isDarkMode?: boolean;
}) => {
  const theme = isDarkMode ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default TProvider;
