"use client";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";

const Dashboard = dynamic(
  () => import("../../src/components/Company-Dashboard/Dashboard"),
  { ssr: false }
);

const CompanyDashboardPage = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    console.log(session);
    localStorage.setItem("email", session.user.email);
    localStorage.setItem("access_token", session.authToken);
  }
  return <Dashboard />;
};
export default CompanyDashboardPage;
