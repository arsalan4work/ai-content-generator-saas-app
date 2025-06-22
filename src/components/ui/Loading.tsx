'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function GlobalLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Trigger loading animation on route/path change
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800); // Simulate load time

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center gap-4">
      {/* Logo */}
      <Image
        src="/logo.svg"
        alt="Loading..."
        width={70}
        height={70}
        className="animate-bounce"
      />

      {/* Bouncing dots animation */}
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-4 h-4 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-4 h-4 bg-primary rounded-full animate-bounce"></div>
      </div>

      {/* Loading Text */}
      <p className="text-sm text-gray-500">Loading...</p>
    </div>
  );
}
