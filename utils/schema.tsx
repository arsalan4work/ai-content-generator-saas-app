import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { InferSelectModel } from "drizzle-orm";

// ========== USERS Table ==========
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  clerkId: varchar('clerk_id', { length: 255 }).unique().notNull(),
  email: varchar('email', { length: 255 }),
  plan: varchar('plan', { length: 50 }).default('free'),
  stripePriceId: varchar('stripe_price_id', { length: 255 }),
});

export type TUser = InferSelectModel<typeof users>;

// ========== AI Output Table ==========
export const AIOutput = pgTable('aiOutput', {
  id: serial('id').primaryKey(),
  formData: text('formData').notNull(),
  aiResponse: text('aiResponse'),
  templateSlug: varchar('template-slug', { length: 255 }).notNull(),
  createdBy: varchar('createdBy', { length: 255 }).notNull(),
  createdAt: varchar('createdAt', { length: 255 }),
});

export type TAIOutput = InferSelectModel<typeof AIOutput>;
