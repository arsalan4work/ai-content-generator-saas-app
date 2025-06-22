import { UserProfile } from "@clerk/nextjs";

// src/app/dashboard/setting/page.tsx
export default function SettingPage() {
  return (
    <div className="flex items-center justify-center h-full">
      <UserProfile/>
    </div>
  );
}
