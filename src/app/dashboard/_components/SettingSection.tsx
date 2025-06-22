'use client';

import { TUser } from "../../../../utils/schema";
import { useUser } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { planLimits } from "../../../../utils/planLimits";
import { useState, useEffect } from "react";

interface Props {
  user: TUser | null | undefined;
}

export default function SettingSection({ user }: Props) {
  const { user: clerkUser, isLoaded } = useUser();
  const [editingName, setEditingName] = useState(false);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    if (clerkUser?.fullName) {
      setNewName(clerkUser.fullName);
    }
  }, [clerkUser]);

  if (!user || !clerkUser || !isLoaded) {
    return <div className="text-center py-10 text-gray-600 animate-pulse">Loading your profile...</div>;
  }

  const plan = user.plan || "free";
  const creditLimit = planLimits[plan];

  const updateName = async () => {
    try {
      await clerkUser.update({
        firstName: newName.split(" ")[0],
        lastName: newName.split(" ").slice(1).join(" "),
      });
      setEditingName(false);
    } catch (err) {
      console.error("Failed to update name:", err);
    }
  };

  return (
    <div className="grid gap-8 max-w-2xl mx-auto bg-white shadow-xl p-8 rounded-3xl border border-gray-200 transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-800">👤 Profile Overview</h2>

      {/* Name Section */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">Name</label>
        <div className="flex gap-3 items-center">
          <Input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            disabled={!editingName}
            className="flex-1"
          />
          <Button
            type="button"
            variant={editingName ? "default" : "outline"}
            onClick={() => (editingName ? updateName() : setEditingName(true))}
          >
            {editingName ? "💾 Save" : "✏️ Edit"}
          </Button>
        </div>
      </div>

      {/* Email Section */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">Email</label>
        <Input
          value={clerkUser.primaryEmailAddress?.emailAddress || ""}
          disabled
        />
      </div>

      {/* Plan Info */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">Subscription Plan</label>
        <Input value={plan.toUpperCase()} disabled />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">Daily Generation Limit</label>
        <Input value={`Up to ${creditLimit.toLocaleString()} characters/day`} disabled />
      </div>
    </div>
  );
}
