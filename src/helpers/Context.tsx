import jwtDecode from "jwt-decode";
import { NextPage } from "next";
import { createContext, useEffect, useState } from "react";

export const ProjectsContext = createContext({
  routes: [],
  user: { login: "", name: "", avatarUrl: "", id: 0 },
  setUser: (user: { login: string; name: string; avatarUrl: string, id: number }) => {},
  token: "",
  setToken: (token: string) => {},
});

interface Props {
  children: React.ReactNode;
}

const ProjectsProvider: NextPage<Props> = ({ children }) => {
  const [routes, setRoutes] = useState([]);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({
    login: "",
    name: "",
    avatarUrl: "",
    id: 0
  });

  useEffect(() => {
    fetch("/api/routes")
      .then((data) => data.json())
      .then((info) => setRoutes(info));
  }, []);

  useEffect(() => {
    const token = document.cookie.replace(/token=/, "");
    if (token) {
      const savedUser: {
        login: string;
        name: string;
        avatarUrl: string;
        id: number;
      } = jwtDecode(token);
      setUser(savedUser);
      setToken(token);
    }
  }, [token]);

  const value = {
    routes,
    user,
    setUser,
    token,
    setToken
  };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;
