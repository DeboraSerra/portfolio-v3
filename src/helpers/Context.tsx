import axios from "axios";
import jwtDecode from "jwt-decode";
import { NextPage } from "next";
import { createContext, useEffect, useState } from "react";

export const ProjectsContext = createContext({
  routes: [],
  user: { login: "", name: "", avatarUrl: "", id: 0 },
  setUser: (user: {
    login: string;
    name: string;
    avatarUrl: string;
    id: number;
  }) => {},
  token: "",
  setToken: (token: string) => {},
  invoices: [],
  setInvoices: (invoices: any) => {},
});

interface Props {
  children: React.ReactNode;
}

const ProjectsProvider: NextPage<Props> = ({ children }) => {
  const [routes, setRoutes] = useState([]);
  const [token, setToken] = useState("");
  const [invoices, setInvoices] = useState([]);
  const [user, setUser] = useState({
    login: "",
    name: "",
    avatarUrl: "",
    id: 0,
  });

  const getInvoices = async () => {
    const { data } = await axios(`/api/invoice?user_id=${user.id}`);
    setInvoices(
      data.invoice.sort(
        (a: any, b: any) =>
          new Date(a.date_received).getTime() -
          new Date(b.date_received).getTime()
      )
    );
  };

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
      getInvoices();
    }
  }, [token]);

  const value = {
    routes,
    user,
    setUser,
    token,
    setToken,
    invoices,
    setInvoices,
  };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;
