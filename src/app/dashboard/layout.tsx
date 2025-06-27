'use client';

import { useState } from "react";
import { Toaster } from "react-hot-toast"; // ✅ import toaster
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [totalUsage, setTotalUsage] = useState<number>(0);

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <div className="bg-slate-50 min-h-screen">
        {/* 🟦 Side Navigation */}
        <div className="md:w-64 hidden md:block fixed">
          <SideNav />
        </div>

        {/* 🟦 Main Content */}
        <div className="md:ml-64">
          <Header />
          {children}
        </div>

        {/* ✅ Global Toast UI */}
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      </div>
    </TotalUsageContext.Provider>
  );
}
