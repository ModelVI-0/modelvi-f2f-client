# modelvi-f2f-client — schedule posts to F2F (Friends2Follow) via the ModelVI API

A minimal **example integration** (Node.js) that schedules posts to **F2F (Friends2Follow)** through the [ModelVI](https://modelvi.com/sign-up?utm_source=github&utm_medium=owned-track&utm_campaign=modelvi-f2f-client) partner API — one of the 14 creator platforms ModelVI posts to.

**[▶ Get your API key →](https://modelvi.com/sign-up?utm_source=github&utm_medium=owned-track&utm_campaign=modelvi-f2f-client)** · [API docs](https://modelvi.com/agent-api) · [Pricing](https://modelvi.com/pricing)

![example](https://img.shields.io/badge/example-MIT-blue) ![node](https://img.shields.io/badge/node-18+-green)

---

> **Honest scope:** ModelVI is an independent posting/automation tool. **F2F (Friends2Follow) is a third-party platform ModelVI posts _to_** — this is **not** an official F2F/Friends2Follow API, and it isn't affiliated with F2F. It's a small client that uses ModelVI's partner API to schedule content on a creator's connected F2F account (platform code `F2F`).

## What this is

An MIT-licensed example that authenticates with a ModelVI partner key (`mvk_<keyId>_<secret>`) and schedules a post to F2F via `POST /schedule` with `platforms: ["F2F"]`. Node 18+, no dependencies (built-in `fetch`). It talks only to the public ModelVI partner API.

## Quickstart

```bash
export MODELVI_API_KEY="mvk_<keyId>_<secret>"
node example.js
```

`example.js` reads a model id from `GET /model_list`, then sends `POST /schedule` with the caption (`title`), `platforms: ["F2F"]`, `scheduledAt` (ISO-8601 UTC), and `type` (`1`=FREE · `2`=FANS · `3`=PAID). Responses are `{ "success": true, "payload": … }`.

## Use cases / keywords

**f2f posting bot** · postbot f2f · auto post f2f · schedule f2f posts · friends2follow automation · post to F2F via API · creator posting automation. Automate F2F posting across managed accounts instead of uploading by hand.

## Honest note

Minimal example — no retries/pagination/media upload. Authoritative reference: **[modelvi.com/agent-api](https://modelvi.com/agent-api)** · **[modelvi.com/partner-api-docs](https://modelvi.com/partner-api-docs)**. Public ModelVI partner API only; no proprietary logic here.

**[▶ Get your API key →](https://modelvi.com/sign-up?utm_source=github&utm_medium=owned-track&utm_campaign=modelvi-f2f-client)** — see [pricing](https://modelvi.com/pricing). MIT licensed.
