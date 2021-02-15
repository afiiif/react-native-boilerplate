import Config from 'react-native-config';

// API
export const { API_HOST } = Config;
export const API_TIMEOUT = Number(Config.API_TIMEOUT);

// Google
export const { GOOGLE_API_KEY } = Config;
export const { FIREBASE_API_KEY } = Config;
export const { FIREBASE_AUTH_DOMAIN } = Config;
export const { FIREBASE_DATABASE_URL } = Config;
export const { FIREBASE_PROJECT_ID } = Config;
export const { FIREBASE_STORAGE_BUCKET } = Config;
export const { FIREBASE_MESSAGING_SENDER_ID } = Config;
export const { FIREBASE_APP_ID } = Config;
export const { FIREBASE_MEASUREMENT_ID } = Config;

// Sentry
export const { SENTRY_DSN } = Config;
