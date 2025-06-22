import { auth } from "@clerk/nextjs/server";
import { db } from "../../../utils/db";
import { users } from "../../../utils/schema";
import { eq } from "drizzle-orm";
import ClientDashboard from "./_components/ClientDashboard";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    return <div>Unauthorized</div>;
  }

  const user = await db.query.users.findFirst({
    where: eq(users.clerkId, userId),
  });

  return <ClientDashboard plan={user?.plan || "free"} />;
}
