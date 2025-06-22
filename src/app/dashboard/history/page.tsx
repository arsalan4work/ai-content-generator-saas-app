'use client';

import { useUser } from '@clerk/nextjs';
import HistorySection from '../_components/HistorySection';

export default function HistoryPage() {
  const { user } = useUser();

  const email = user?.primaryEmailAddress?.emailAddress;

  if (!user || !email) return <p className="p-10">Please sign in to view history.</p>;

  return (
    <div className="p-10">
      <HistorySection userEmail={email} />
    </div>
  );
}
