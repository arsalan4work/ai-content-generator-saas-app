'use client';

import React, { createContext, useState } from 'react';

export const TotalUsageContext = createContext<{
  totalUsage: number;
  setTotalUsage: React.Dispatch<React.SetStateAction<number>>;
}>({
  totalUsage: 0,
  setTotalUsage: () => {},
});

export const TotalUsageProvider = ({ children }: { children: React.ReactNode }) => {
  const [totalUsage, setTotalUsage] = useState(0);

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      {children}
    </TotalUsageContext.Provider>
  );
};
