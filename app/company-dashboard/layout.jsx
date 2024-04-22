"use client";

import Sidebar from "../../src/components/Company-Dashboard/Sidebar/Sidebar";

function DashboardLayout({ children }) {
  return (
    <>
      <div>
        <Sidebar>{children}</Sidebar>
      </div>
    </>
  );
}

export default DashboardLayout;
