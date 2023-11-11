import { initializeApp, cert } from "firebase-admin/app";
import { initializeFirestore } from "firebase-admin/firestore";
import config from "../config/config.js";

const objConfig = {
  type: config.firebase.type,
  projectId: config.firebase.proyectId,
  private_key_id: config.firebase.privateKeyId,
  privateKey: config.firebase.privateKey,
  client_email: config.firebase.clientEmail,
  client_id: config.firebase.clientId,
  auth_uri: config.firebase.authUri,
  token_uri: config.firebase.tokenUri,
  auth_provider_x509_cert_url: config.firebase.authX509cert,
  client_x509_cert_url: config.firebase.clientX509cert,
  universe_domain: config.firebase.universeDomain,
};
const firebaseApp = initializeApp({
  credential: cert(objConfig),
  serviceAccountId: objConfig.client_email,
  projectId: objConfig.projectId,
});

export const database = initializeFirestore(firebaseApp);
