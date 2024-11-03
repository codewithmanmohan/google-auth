import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import {
  BASE_REDIRECT_URL,
  OAUTH_CLIENT_ID,
  OAUTH_DOMAIN,
} from "../common/environment.js";
createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={OAUTH_DOMAIN}
    clientId={OAUTH_CLIENT_ID}
    authorizationParams={{
      redirect_uri: BASE_REDIRECT_URL,
    }}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </Auth0Provider>
);
