import { NextResponse } from "next/server";
import Stripe from "stripe";
import { db } from "../../../../utils/db";
import { users } from "../../../../utils/schema";
import { eq } from "drizzle-orm";

export const config = {
  api: {
    bodyParser: false, // Important for raw body
  },
};

// ✅ Step 2: Removed apiVersion
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  const rawBody = await req.text();
  const sig = req.headers.get("stripe-signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (err) {
    console.error("Webhook signature error:", err);
    return new NextResponse(`Webhook Error: ${(err as Error).message}`, {
      status: 400,
    });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const customerEmail = session.customer_email;
    const priceId = session.metadata?.priceId;

    let plan = "free";
    if (priceId === "your_starter_price_id") plan = "starter";
    else if (priceId === "your_pro_price_id") plan = "pro";
    else if (priceId === "your_elite_price_id") plan = "elite";

    // ✅ Update user in DB
    await db
      .update(users)
      .set({ plan })
      .where(eq(users.email, customerEmail || ""));

    console.log(`✅ Updated plan to ${plan} for ${customerEmail}`);
  }

  return NextResponse.json({ received: true });
}
