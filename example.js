#!/usr/bin/env node
/**
 * modelvi-f2f-client
 *
 * Schedule a post to F2F (Friends2Follow) via the public ModelVI partner API.
 *
 * Honest scope: ModelVI is an independent posting tool; F2F is a third-party
 * platform ModelVI posts TO. This is NOT an official F2F API. It uses ModelVI's
 * partner API with platform code "F2F".
 *
 *   Get an API key:  https://modelvi.com/sign-up
 *   API reference:   https://modelvi.com/agent-api
 *
 * Minimal EXAMPLE (no retries/pagination/media upload). Node 18+ (built-in fetch).
 *
 *   export MODELVI_API_KEY="mvk_<keyId>_<secret>"
 *   node example.js
 */

const BASE_URL = process.env.MODELVI_API_BASE || "https://modelvi.com/api/partner/v1";
const API_KEY = process.env.MODELVI_API_KEY;
const SIGNUP_URL = "https://modelvi.com/sign-up";
const PLATFORM = "F2F"; // Friends2Follow platform code

async function call(path, init = {}) {
  if (!API_KEY) {
    console.error(`Missing MODELVI_API_KEY. Get a key at ${SIGNUP_URL} and export it.`);
    process.exit(1);
  }
  const res = await fetch(`${BASE_URL}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });
  if (res.status === 401) {
    console.error(`Unauthorized (401). Get a valid key at ${SIGNUP_URL}`);
    process.exit(1);
  }
  if (!res.ok) throw new Error(`ModelVI partner API ${res.status}: ${await res.text()}`);
  const json = await res.json();
  return json.payload ?? json; // unwrap { success, payload }
}

async function main() {
  // 1) grab a model id
  const models = await call("/model_list");
  const list = Array.isArray(models) ? models : models.items || [];
  if (!list.length) {
    console.error("No models on this account yet — add one in your ModelVI dashboard.");
    process.exit(1);
  }
  const model = list[0].id ?? list[0].model;

  // 2) schedule a post to F2F
  const scheduledAt = new Date(Date.now() + 5 * 60 * 1000).toISOString().replace(/\.\d{3}Z$/, "Z");
  const body = {
    model,
    platforms: [PLATFORM],
    title: "New drop is live ✨", // the caption field is `title`
    scheduledAt,
    type: 1, // 1=FREE, 2=FANS, 3=PAID
  };
  console.log(`POST ${BASE_URL}/schedule → ${PLATFORM}`);
  console.log("Scheduled:", await call("/schedule", { method: "POST", body: JSON.stringify(body) }));
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
