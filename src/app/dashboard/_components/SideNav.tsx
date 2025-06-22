'use client'

import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";

export default function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/setting",
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log("Current path:", path);
  }, [path]);

  return (
    <div className="h-screen relative p-5 shadow-md border bg-white">
      {/* Logo */}
      <div className="flex justify-center">
        <Link href="/dashboard">
          <Image src="/logo.svg" alt="Image not Found!" width={75} height={75} />
        </Link>
      </div>

      {/* Menu List */}
      <hr className="my-5 border" />
      <div className="mt-4">
        {MenuList.map((menu) => (
          <Link href={menu.path} key={menu.name}>
            <div
              className={`flex gap-2 mt-4 mb-4 p-2 rounded-lg cursor-pointer 
              hover:bg-primary hover:text-white transition-colors duration-200 
              ${path === menu.path ? "bg-primary text-white" : "text-gray-700"}`}
            >
              <menu.icon className="h-6 w-6" />
              <h2>{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>

      {/* Usage Tracker */}
      <div className="absolute md:mt-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}
