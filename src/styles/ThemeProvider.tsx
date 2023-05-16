import { darkTheme, lightTheme } from "@/helpers/Theme";
import { ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "usehooks-ts";

const TProvider = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useDarkMode();

  const theme = isDarkMode ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default TProvider;
