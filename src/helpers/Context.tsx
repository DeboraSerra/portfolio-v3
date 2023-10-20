import decode from "jwt-decode";
import { NextPage } from "next";
import { cookies } from "next/dist/client/components/headers";
import { createContext, useEffect, useState } from "react";

export const ProjectsContext = createContext({
  routes: [],
  user: { login: "", name: "", avatarUrl: "" },
});

interface Props {
  children: React.ReactNode;
}

const ProjectsProvider: NextPage<Props> = ({ children }) => {
  const [routes, setRoutes] = useState([]);
  const [user, setUser] = useState({
    login: "",
    name: "",
    avatarUrl: "",
  });

  useEffect(() => {
    fetch("/api/routes")
      .then((data) => data.json())
      .then((info) => setRoutes(info));
  }, []);

  const getUser = () => {
    const token = cookies().get("token")?.value;
    if (token) {
      const savedUser: {
        login: string;
        name: string;
        avatarUrl: string;
      } = decode(token);
      setUser(savedUser);
    }
  };

  const value = {
    routes,
    user,
  };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;
