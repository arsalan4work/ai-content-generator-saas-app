'use client';
import React, { createContext, useContext } from "react";
import { TotalUsageContext } from "./TotalUsageContext";

export const UpdateCreditUsageContext = createContext({
  updateUsage: (usedCredits: number) => {},
});

export function UpdateCreditProvider({ children }: { children: React.ReactNode }) {
  const { setTotalUsage } = useContext(TotalUsageContext);

  const updateUsage = (used: number) => {
    setTotalUsage((prev: number) => prev + used);
  };

  return (
    <UpdateCreditUsageContext.Provider value={{ updateUsage }}>
      {children}
    </UpdateCreditUsageContext.Provider>
  );
}