'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";

const plans = [
  {
    name: "Have a Try",
    price: "Free",
    priceId: null,
    features: ["3 Generations/Day", "Basic Support", "Community Access"],
    cta: "Start for Free",
    highlight: false,
  },
  {
    name: "Starter",
    price: "$12/month",
    priceId: "price_1RcOwtDihyfVWf8aK1hJ1BnG",
    features: ["100 Generations/Day", "Email Support", "Early Access"],
    cta: "Upgrade to Starter",
    highlight: false,
  },
  {
    name: "Best Deal",
    price: "$24/month",
    priceId: "price_1RcOxHDihyfVWf8am9ZpkuEF",
    features: ["500 Generations/Day", "Priority Support", "All Features"],
    cta: "Upgrade to Pro",
    highlight: true,
  },
  {
    name: "For Professionals",
    price: "$45/month",
    priceId: "price_1RcOyJDihyfVWf8aP9mi0aFo",
    features: ["Unlimited Generations", "1-on-1 Onboarding", "Premium Features"],
    cta: "Upgrade to Elite",
    highlight: false,
  },
];

export default function Billing() {
  const { user } = useUser();

  const handleCheckout = async (priceId: string) => {
    if (!user?.id || !priceId) return;

    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId, userId: user.id }),
    });

    const data = await res.json();
    if (data.url) window.location.href = data.url;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
      {plans.map((plan) => (
        <Card
          key={plan.name}
          className={`flex flex-col justify-between border-2 ${
            plan.highlight ? "border-purple-600 shadow-xl" : "border-gray-300"
          }`}
        >
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-bold">{plan.name}</h2>
            <p className="text-2xl font-semibold">{plan.price}</p>
            <ul className="text-sm space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx}>✅ {feature}</li>
              ))}
            </ul>
            <Button
              onClick={() => {
                if (plan.priceId) handleCheckout(plan.priceId);
              }}
              disabled={!plan.priceId}
              className="w-full cursor-pointer"
            >
              {plan.cta}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
