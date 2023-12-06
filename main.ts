import { Hono } from "https://deno.land/x/hono@v3.11.2/mod.ts";

const app = new Hono();

app.get(
  "/",
  (c) => c.text("Hi! This is Area149. This server managed by @Comamoca!"),
);

Deno.serve({ port: 34141 }, app.fetch);
