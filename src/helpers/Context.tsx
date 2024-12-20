/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import jwtDecode from "jwt-decode";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { createContext, useEffect, useMemo, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useWindowSize } from "usehooks-ts";
import { ProjectsPaths } from "./interfaces";

export const PHONE = "+1 604 417 1593";
export const WHATS_LINK =
  "https://wa.me/" + PHONE.replace("+", "").replace(/\s/g, "");

export const ProjectsContext = createContext({
  routes: [] as ProjectsPaths[],
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
  getInvoices: () => {},
  payments: [],
  setPayments: (payments: any) => {},
  getPayments: () => {},
  editPayment: ({
    payed,
    value,
    date,
    id,
  }: {
    payed?: boolean;
    value: string;
    date?: string;
    id: number;
  }) => {},
  paymentToEdit: null,
  setPaymentToEdit: (payment: any) => {},
  invoiceToEdit: null,
  setInvoiceToEdit: (invoice: any) => {},
  width: 0,
});

interface Props {
  children: React.ReactNode;
}

const ProjectsProvider: NextPage<Props> = ({ children }) => {
  const [routes, setRoutes] = useState([]);
  const [token, setToken] = useState("");
  const [invoices, setInvoices] = useState([]);
  const [payments, setPayments] = useState([]);
  const [paymentToEdit, setPaymentToEdit] = useState<any>(null);
  const [invoiceToEdit, setInvoiceToEdit] = useState<any>(null);
  const [user, setUser] = useState({
    login: "",
    name: "",
    avatarUrl: "",
    id: 0,
  });
  const { width } = useWindowSize();
  const router = useRouter();

  const getInvoices = async () => {
    const { data } = await axios(`/api/invoice?user_id=${user.id}`);
    setInvoices(
      data.invoice.sort(
        (a: any, b: any) =>
          new Date(b.date_received).getTime() -
          new Date(a.date_received).getTime()
      )
    );
  };

  const getPayments = async () => {
    const { data } = await axios(`/api/payments?user_id=${user.id}`);
    setPayments(
      data.payment?.sort(
        (a: any, b: any) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
      ) || []
    );
  };

  const editPayment = async ({
    payed = false,
    value,
    date = undefined,
    id,
  }: {
    payed?: boolean;
    value: string;
    date?: string;
    id: number;
  }) => {
    const body = {
      id,
      payed,
      value,
      date,
      user_id: user.id,
    };
    const { data } = await axios.put(`/api/payments?user_id=${user.id}`, body);
    if ("error" in data) {
      console.error(data.error);
    } else {
      const newPayments = payments.map((payment) =>
        (payment as any).id === id ? data.payment : payment
      );
      setPayments(newPayments as any);
      setPaymentToEdit(null);
    }
  };

  useEffect(() => {
    if (token) {
      router.push(`/profile/${user.id}/invoices-control`);
    } else router.push("/");
  }, [token]);

  useEffect(() => {
    fetch("/api/routes")
      .then((data) => data.json())
      .then((info) => setRoutes(info));
    const cookieToken = document.cookie.match(/token=/);
    setToken(cookieToken ? cookieToken[1] : "");
  }, []);

  useEffect(() => {
    if (!!token) {
      const savedUser: {
        login: string;
        name: string;
        avatarUrl: string;
        id: number;
      } = jwtDecode(token);
      setUser(savedUser);
      getInvoices();
    } else {
      router.push("/");
    }
  }, [token]);

  const value = useMemo(
    () => ({
      routes,
      user,
      setUser,
      token,
      setToken,
      invoices,
      setInvoices,
      getInvoices,
      getPayments,
      payments,
      setPayments,
      editPayment,
      paymentToEdit,
      setPaymentToEdit,
      invoiceToEdit,
      setInvoiceToEdit,
      width,
    }),
    [routes, user, token, invoices, payments, paymentToEdit, invoiceToEdit]
  );

  if (!width) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <FaSpinner size={50} />
      </div>
    );
  }

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;
