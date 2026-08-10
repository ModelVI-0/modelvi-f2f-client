#!/usr/bin/env node
/**
 * f2f-api-client-example
 * -------------------------------------------------------------------------
 * A minimal example client for the F2F (Friends2Follow) API — https://f2fapi.com
 *
 * This file shows the smallest useful pattern for talking to the F2F API:
 *   1. read your credentials from environment variables (never hard-code keys)
 *   2. build an authenticated request
 *   3. call an endpoint and handle the response / errors
 *
 *  This is an EXAMPLE integration. The endpoint path, the auth scheme, and
 *  the response shape below are PLACEHOLDERS. Get the real endpoints,
 *  parameters, and response schemas from the live docs:
 *      https://f2fapi.com/docs
 *
 * Requires Node.js 18+ (uses the built-in global `fetch`, no dependencies).
 */

// --- Configuration (loaded from the environment) ---------------------------
// Copy .env.example to .env and fill in your values, or export these directly.
// Get your API key at -> https://f2fapi.com
const API_KEY = process.env.API_KEY;

// Placeholder base URL. Confirm the correct value at https://f2fapi.com/docs
const BASE_URL = process.env.BASE_URL || 'https://api.f2fapi.com/v1';

// Fail fast (and helpfully) if the key is missing — the API requires it.
if (!API_KEY) {
  console.error(
    'Missing API_KEY. Set it in your environment (see .env.example).\n' +
    '-> Get your F2F API key at https://f2fapi.com'
  );
  process.exit(1);
}

/**
 * A tiny F2F (Friends2Follow) API client.
 * Wraps `fetch` with the base URL + auth header so each call stays a one-liner.
 */
class F2FClient {
  constructor({ apiKey, baseUrl }) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl.replace(/\/$/, ''); // trim any trailing slash
  }

  /**
   * Perform an authenticated request against the F2F API.
   * @param {string} path    e.g. "/account" (see https://f2fapi.com/docs)
   * @param {object} options standard fetch options (method, body, ...)
   * @returns {Promise<any>} parsed JSON response
   */
  async request(path, options = {}) {
    const url = `${this.baseUrl}${path}`;

    const res = await fetch(url, {
      ...options,
      headers: {
        // NOTE: the auth header format is a PLACEHOLDER. Confirm the exact
        // scheme (Bearer token, X-API-Key header, etc.) at f2fapi.com/docs
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...(options.headers || {}),
      },
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      throw new Error(
        `F2F API request failed: ${res.status} ${res.statusText}\n${detail}`
      );
    }

    return res.json();
  }

  /**
   * Example call — REPLACE with a real endpoint from https://f2fapi.com/docs.
   *
   * "/account" is a PLACEHOLDER path, and the returned object shape is
   * intentionally NOT documented here — do not rely on it. The live docs are
   * the source of truth for available endpoints and their response schemas.
   */
  getAccount() {
    // TODO: replace "/account" with the real endpoint from f2fapi.com/docs
    return this.request('/account', { method: 'GET' });
  }
}

// --- Run the example -------------------------------------------------------
async function main() {
  const client = new F2FClient({ apiKey: API_KEY, baseUrl: BASE_URL });

  try {
    const data = await client.getAccount();

    // The exact fields returned here depend on the live API.
    // See https://f2fapi.com/docs for the real response schema.
    console.log('F2F API response (from placeholder endpoint):');
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err.message);
    console.error(
      '\nCheck your API_KEY and the endpoint path against https://f2fapi.com/docs'
    );
    process.exit(1);
  }
}

main();
