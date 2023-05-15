import { NextPage } from "next";
import { createContext, useContext, useEffect, useState } from "react";

export const ProjectsContext = createContext({ routes: [] })

interface Props {
  children: React.ReactNode,
}

const ProjectsProvider: NextPage<Props> = ({ children }) => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    fetch("/api/routes")
      .then((data) => data.json())
      .then((info) => setRoutes(info));
  }, []);

  const value = {
    routes,
  }

  return (
    <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>
  )
}

export default ProjectsProvider;
