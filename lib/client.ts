import { treaty } from "@elysiajs/eden";
import type { App } from "../app/api/[[...slugs]]/route";

// .api to enter /api prefix
export const client =
  typeof window !== "undefined"
    ? treaty<App>("/api").api
    : treaty<App>("http://localhost:3000").api;
