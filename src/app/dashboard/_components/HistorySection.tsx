'use client';

import { useEffect, useState } from 'react';
import { eq } from 'drizzle-orm';
import moment from 'moment';

import { db } from '../../../../utils/db';
import { AIOutput } from '../../../../utils/schema';

interface Props {
  userEmail: string;
}

export default function HistorySection({ userEmail }: Props) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await db
          .select()
          .from(AIOutput)
          .where(eq(AIOutput.createdBy, userEmail));

        setData(result.reverse()); // latest first
      } catch (error) {
        console.error('Failed to fetch history:', error);
      } finally {
        setLoading(false);
      }
    };

    if (userEmail) fetchData();
  }, [userEmail]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (data.length === 0) return <p className="p-4">No history found.</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">History</h2>

      <div className="grid grid-cols-6 font-semibold border-b pb-2 text-sm">
        <div>TEMPLATE</div>
        <div className="col-span-2">AI RESP</div>
        <div>DATE</div>
        <div>WORDS</div>
        <div>COPY</div>
      </div>

      {data.map((item, i) => {
        const wordCount = item.aiResponse?.split(/\s+/).length || 0;
        const formattedDate = moment(item.createdAt, 'DD/MM/YYYY').format('DD/MM/YYYY');

        return (
          <div key={i} className="grid grid-cols-6 items-center border-b py-2 text-sm">
            <div>{item.templateSlug}</div>
            <div className="col-span-2 truncate max-w-[450px]">{item.aiResponse.slice(0, 100)}...</div>
            <div>{formattedDate}</div>
            <div>{wordCount}</div>
            <div>
              <button
                onClick={() => navigator.clipboard.writeText(item.aiResponse)}
                className="text-indigo-600 hover:underline text-sm"
              >
                Copy
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
