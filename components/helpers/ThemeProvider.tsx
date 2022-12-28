import { NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../helpers/Theme";
import { useDarkMode } from 'usehooks-ts';

interface Props {
  children: ReactNode;
}

const TProvider: NextPage<Props> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  const { isDarkMode } = useDarkMode(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const body = <ThemeProvider theme={theme}>{children}</ThemeProvider>;

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>
  }
  return body;
};

export default TProvider;
