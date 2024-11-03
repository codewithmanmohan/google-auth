export const OAUTH_DOMAIN = import.meta.env.VITE_OAUTH_DOMAIN;
export const OAUTH_CLIENT_ID = import.meta.env.VITE_OAUTH_CLIENT_ID;

export const BASE_REDIRECT_URL =
  import.meta.env.VITE_environment === "development"
    ? "http://localhost:3000"
    : "https://google-auth-sable.vercel.app/";
