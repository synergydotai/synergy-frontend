export const NEXT_PUBLIC_VALIDATOR_HOTKEY_WALLET = process.env
  .NEXT_PUBLIC_VALIDATOR_HOTKEY_WALLET as string;

export const HOME_SECTIONS = {
  HERO: "hero",
  METRICS: "metrics",
  ABOUT: "about",
  MISSION: "mission",
  PRODUCTS: "our-products",
  BENEFITS: "benefits",
} as const;

export const ROUTES = {
  HOME: "/",
  DELEGATE: "/delegate",
};

export const MOCK_API_ENDPOINT =
  "https://66d0506f181d059277de15dc.mockapi.io/api/v1/stakes";

export const VAAS_APP_URL = "https://vaas.synergydots.ai/";
export const X_PROFILE_URL = "https://x.com/synergydotsai";
export const DISCORD_URL = "https://discord.gg/vcDgngDb47";
export const GITHUB_URL = "https://github.com/synergydotai/";

export const TAO = "τ";
export const PLANCK_PER_TAO = 1e9;
export const BITTENSOR_RPC_ENDPOINT =
  "wss://entrypoint-finney.opentensor.ai:443";
