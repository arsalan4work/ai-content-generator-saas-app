import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

// ✅ Removed apiVersion to avoid type error
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const { priceId, userId } = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${req.nextUrl.origin}/dashboard?status=success`,
      cancel_url: `${req.nextUrl.origin}/billing?status=cancel`,
      metadata: { userId },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe session error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
