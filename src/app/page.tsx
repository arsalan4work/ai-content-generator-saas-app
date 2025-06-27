"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-800">
      {/* Header */}
      <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold">AiGenie</span>
          </div>
          <Link href="/dashboard">
            <Button className="px-8 py-6 text-lg cursor-pointer">🔐 Login to Dashboard</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center py-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <Image src="/logo.svg" alt="Logo" width={80} height={80} />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl"
        >
          Unleash AI-Powered Content
          <span className="text-primary"> — Fast, Easy, Effective</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl"
        >
          Generate blog posts, YouTube scripts, SEO content, and more using the
          power of AI — all in one dashboard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10"
        >
          <Link href="/dashboard">
            <Button className="px-8 py-6 text-lg">🚀 Enter Dashboard</Button>
          </Link>
        </motion.div>
      </main>

      {/* Sub-Section 1: Features */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-6"
          >
            Why AiGenie?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "🚀 Speed",
                text: "Generate content in seconds with minimal input.",
              },
              {
                title: "🤖 Smart",
                text: "Powered by advanced AI models for quality outputs.",
              },
              {
                title: "🎯 Versatile",
                text: "From blogs to tweets, generate content for any platform.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
                className="bg-blue-50 p-6 rounded-xl shadow-md"
              >
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Section 2: Use Cases */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-6"
          >
            Use It For Anything
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "📄 Blog Writing",
              "📹 YouTube Scripts",
              "🛒 Product Descriptions",
              "🎯 Social Captions",
              "📧 Emails & Newsletters",
              "📢 Ad Copy & CTAs",
            ].map((use, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * i, duration: 0.5 }}
                className="border border-gray-200 bg-white p-5 rounded-lg"
              >
                <p className="text-md font-medium text-gray-700">{use}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-sm space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} AiGenie. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:underline">
              Terms
            </Link>
            <Link href="#" className="hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
