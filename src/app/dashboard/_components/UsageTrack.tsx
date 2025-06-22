'use client';

import React, { useContext, useEffect, ReactNode } from 'react';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import { AIOutput, TAIOutput } from '../../../../utils/schema';
import { db } from '../../../../utils/db';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';
import { planLimits } from '../../../../utils/planLimits';

interface Props {
  children?: ReactNode;
}

export default function UsageTrack({ children }: Props) {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

  const userPlan = 'free'; // TODO: Replace with real plan from DB
  const creditLimit = planLimits[userPlan];

  const GetData = async () => {
    const result: TAIOutput[] = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress || ''));

    let total = 0;
    result.forEach((item) => {
      total += Number(item.aiResponse?.length || 0);
    });

    setTotalUsage(total);
  };

  const updateUsage = (used: number) => {
    setTotalUsage((prev: number) => prev + used);
  };

  useEffect(() => {
    if (user) GetData();
  }, [user]);

  return (
    <UpdateCreditUsageContext.Provider value={{ updateUsage }}>
      <div className="px-4 pb-4">
        <p className="text-sm font-semibold text-gray-600 mb-1">Credit Usage</p>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-600 transition-all duration-300"
            style={{ width: `${(totalUsage / creditLimit) * 100}%` }}
          />
        </div>
        <p className="text-xs mt-1 text-gray-500">
          {`${totalUsage.toLocaleString()} / ${creditLimit.toLocaleString()} credits used`}
        </p>
      </div>

      {children}
    </UpdateCreditUsageContext.Provider>
  );
}
