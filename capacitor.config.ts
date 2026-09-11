import type { CapacitorConfig } from "@capacitor/cli";

// The Android/iOS shell has no bundled web assets of its own — it's a thin
// native wrapper that loads the real, always-up-to-date site over HTTPS, the
// same way a browser would. See README.md "Android app" section for how to
// point this at your deployed URL before building.
const serverUrl = process.env.CAPACITOR_SERVER_URL || "https://your-deployed-domain.example.com";

const config: CapacitorConfig = {
  appId: "com.rtoquiz.app",
  appName: "RTO Quiz",
  webDir: "public",
  server: {
    url: serverUrl,
    // Only relevant if serverUrl is ever pointed at a plain-http address
    // (e.g. a LAN dev server) instead of https.
    cleartext: serverUrl.startsWith("http://"),
  },
};

export default config;
