import { ProjectsContext } from "@/helpers/Context";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const Header = () => {
  const { routes } = useContext(ProjectsContext);
  return (
    <nav>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
      {routes.map(({ id, name, route }) => (
        <Link key={id} href={`/projects/${route}`}>
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Header;
