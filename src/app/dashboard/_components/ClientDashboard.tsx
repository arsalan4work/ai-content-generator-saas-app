'use client'

import { useState } from "react";
import SearchSection from "./SearchSection";
import TemplateListSection from "./TemplateListSection";

interface Props {
  plan: string;
}

export default function ClientDashboard({ plan }: Props) {
  const [userSearchInput, setUserSearchInput] = useState<string>()

  return (
    <div>
      {/* Optional banner based on plan */}
      {plan === "free" && (
        <div className="bg-yellow-200 p-2 text-sm text-center font-semibold">
          You're on Free Plan. Upgrade for unlimited generations.
        </div>
      )}

      {/* Search */}
      <SearchSection onSearchInput={(value: string) => setUserSearchInput(value)} />

      {/* Template List */}
      <TemplateListSection userSearchInput={userSearchInput} plan={plan} />
    </div>
  );
}
