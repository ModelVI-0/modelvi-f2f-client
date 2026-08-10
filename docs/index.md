---
title: f2f-api-client-example
description: A minimal, open-source example client for the F2F (Friends2Follow) API.
---

# f2f-api-client-example

A minimal, open-source example client for the **F2F API** (Friends2Follow API), powered by **[f2fapi.com](https://f2fapi.com)**.

One small Node.js file that shows how to authenticate and make your first call to the **f2f api** — no framework, no dependencies, readable in a couple of minutes.

## What you get

- A tiny `F2FClient` that adds the base URL and auth header for you.
- Credentials read from environment variables (`API_KEY`, `BASE_URL`).
- A clearly-marked **placeholder** endpoint call with proper error handling.

It's a starting point for a real **friends2follow api** integration — the kind of thin client agencies and teams write first when they want to manage accounts programmatically instead of by hand.

## Quick start

```bash
git clone https://github.com/YOUR_ORG/f2f-api-client-example.git
cd f2f-api-client-example
cp .env.example .env   # then add your API key
node --env-file=.env example.js
```

Requires **Node.js 18+**.

## You'll need an API key

Every request needs a valid key.

**→ [Get your API key at f2fapi.com](https://f2fapi.com)**

## This is an example

The endpoint path, auth scheme, and response shape in the code are **placeholders** to demonstrate the pattern — this is a reference example, not the official SDK. For the live endpoints and schemas, use the official docs.

- **F2F API — [f2fapi.com](https://f2fapi.com)**
- **API docs — [f2fapi.com/docs](https://f2fapi.com/docs)**
