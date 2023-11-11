import { config } from "dotenv";
config();

export default {
  base: {
    port: process.env.PORT || 8080,
    openaiApiKey: process.env.OPENAI_APIKEY,
  },
  firebase: {
    type: process.env.FIREBASE_TYPE,
    proyectId: process.env.FIREBASE_PROYECT_ID,
    privateKeyId: process.env.FIREBASE_PRIVATE_KEY_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    clientId: process.env.FIREBASE_CLIENT_ID,
    authUri: process.env.FIREBASE_AUTH_URI,
    tokenUri: process.env.FIREBASE_TOKEN_URI,
    authX509cert: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    clientX509cert: process.env.FIREBASE_CLIENT_X509_CERT_URL,
    universeDomain: process.env.FIREBASE_UNIVERSE_DOMAIN,
  },
};
