import { ProjectsContext } from "@/helpers/Context";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

import * as S from "./Header.styled";
import { useDarkMode } from "usehooks-ts";

const Header = () => {
  const { routes } = useContext(ProjectsContext);

  const { isDarkMode, toggle } = useDarkMode();

  return (
    <S.Header>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
      {routes.map(({ id, name, route }) => (
        <Link key={id} href={`/projects/${route}`}>
          {name}
        </Link>
      ))}
      <button onClick={toggle}>{isDarkMode ? 'light' : 'dark' }</button>
    </S.Header>
  );
};

export default Header;
