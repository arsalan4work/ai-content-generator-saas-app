import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials:{
    url: 'postgresql://neondb_owner:npg_EuoiM7z5NBfQ@ep-tiny-cherry-a1kvxnhu-pooler.ap-southeast-1.aws.neon.tech/ai-content-generator?sslmode=require'
  }
});