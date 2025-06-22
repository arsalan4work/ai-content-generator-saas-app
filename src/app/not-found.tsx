'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Frown } from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          router.push("/dashboard");
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white px-4">
      <Image src="/logo.svg" alt="Logo" width={70} height={70} className="mb-6" />

      <Frown className="w-16 h-16 text-gray-400 mb-4" />

      <h1 className="text-4xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
      <p className="text-gray-500 mb-6">
        Redirecting to your dashboard in <span className="font-semibold text-primary">{countdown}</span> seconds...
      </p>

      <Link href="/dashboard">
        <Button className="px-6 py-3 text-white">
          Go to Dashboard Now
        </Button>
      </Link>
    </div>
  );
}
