# f2f-api-client-example

A minimal, open-source example client for the **F2F API** (Friends2Follow API), powered by **[f2fapi.com](https://f2fapi.com)**.

This repository shows the smallest useful pattern for authenticating against and calling the **f2f api** from Node.js. It is intentionally tiny — one file, no framework, no magic — so you can read it top to bottom in a couple of minutes and adapt it to your own stack.

> **→ Get your API key at [https://f2fapi.com](https://f2fapi.com)** — the example requires a valid F2F API key to run.

---

## What it does

- Reads your F2F API credentials from environment variables (never hard-coded).
- Wraps `fetch` in a tiny `F2FClient` class that adds the base URL and auth header for you.
- Calls one **placeholder** endpoint and prints the response, with clear error handling.

That's the whole surface area. It's a starting point for a real **friends2follow api** integration, not a full SDK.

## Why — the agency use-case

If you run an agency or a team that manages multiple creator or brand accounts, you eventually want to do that work *programmatically* instead of clicking through dashboards. A thin, well-understood client like this one is usually the first thing you write:

- Automate repetitive audience-growth and account-management tasks across many managed accounts.
- Pull account state into your own internal tools, reporting, or CRM.
- Standardize how your services authenticate to the F2F API so every job uses the same, reviewable pattern.

This example gives you that thin client without committing you to anyone's framework.

## Requirements

- **Node.js 18+** (uses the built-in global `fetch` — no dependencies).
- A **F2F API key** — **[get one at f2fapi.com](https://f2fapi.com)**.

## Install

```bash
git clone https://github.com/YOUR_ORG/f2f-api-client-example.git
cd f2f-api-client-example
```

No `npm install` is needed — the example uses only Node's built-in `fetch`.

## Configuration

Copy the example env file and fill in your own values:

```bash
cp .env.example .env
```

`.env`:

```dotenv
# Your F2F API key — get one at https://f2fapi.com
API_KEY=your_api_key_here

# Base URL for the F2F API. This is a PLACEHOLDER default —
# confirm the correct value in the live docs: https://f2fapi.com/docs
BASE_URL=https://api.f2fapi.com/v1
```

Both `API_KEY` and `BASE_URL` are read from the environment. You can also export them directly instead of using a `.env` file:

```bash
export API_KEY=your_api_key_here
export BASE_URL=https://api.f2fapi.com/v1
```

> If you use a `.env` file, load it with your process manager or a loader such as `node --env-file=.env example.js` (Node 20+), or `dotenv`. The example itself reads plain `process.env` so it stays dependency-free.

## Usage

The full, commented example lives in [`example.js`](./example.js). Run it with:

```bash
node --env-file=.env example.js
# or, if you exported the vars yourself:
node example.js
```

At a glance, the client is just:

```js
const client = new F2FClient({ apiKey: process.env.API_KEY, baseUrl: process.env.BASE_URL });
const data = await client.getAccount(); // ← placeholder endpoint, see example.js
console.log(data);
```

See `example.js` for the `F2FClient` class, the auth header, error handling, and the inline notes about which parts are placeholders.

## Get your API key

You need a valid key for any request to succeed.

**→ Get your API key at [https://f2fapi.com](https://f2fapi.com)**

## This is an EXAMPLE integration

This repo is a **reference example**, not the official SDK and not a guarantee of any specific endpoint. The endpoint path (`/account`), the auth scheme, and the response shape shown in the code are **placeholders** to illustrate the pattern.

**For the live endpoints, parameters, auth details, and response schemas, always use the official docs → [https://f2fapi.com/docs](https://f2fapi.com/docs)**

## Links

- **F2F API — [f2fapi.com](https://f2fapi.com)**
- **API documentation — [f2fapi.com/docs](https://f2fapi.com/docs)**

## License

MIT. Use it, fork it, adapt it for your own **friends2follow api** integration.
