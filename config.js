/**
 * Map the .env value correctly to all env values per server, this will be added to every startup command by app.js
 *
 */
require('dotenv').config();

exports.frontendConfig = {
  PORT: process.env.FRONTED_PORT,
  DB_HOST: process.env.FRONTEND_MONGO_DB_HOST,
  DB_PORT: process.env.FRONTEND_MONGO_PORT,
  MONGO_DB_HOST: process.env.FRONTEND_MONGO_DB_HOST,
  APOS_ALWAYS_COPY_ASSETS: '1',
  APOS_WORKFLOW: process.env.FRONTEND_APOS_WORKFLOW,
  DEFAULT_DB: process.env.FRONTED_DEFAULT_MONGO_DB,
  IMAGE_API_URL: process.env.IMAGE_APP_URL,
  IMAGE_API_ACCESS_TOKEN: process.env.IMAGE_API_ACCESS_TOKEN,
  INTERNAL_API_URL: process.env.FRONTEND_INTERNAL_API_URL,
  API: process.env.FRONTEND_API_URL,
  SESSION_SECRET: process.env.SESSION_SECRET,
  SITE_API_KEY: process.env.FRONTEND_SITE_API_KEY,
  APOS_WORKFLOW: process.env.FRONTEND_APOS_WORKFLOW,
  LOGIN_CSM_BASIC_AUTH_USER: process.env.FRONTEND_LOGIN_CSM_BASIC_AUTH_USER,
  LOGIN_CSM_BASIC_AUTH_PASSWORD:
    process.env.FRONTEND_LOGIN_CSM_BASIC_AUTH_PASSWORD,
  MINIFY_JS: process.env.FRONTEND_MINIFY_JS,
  COOKIE_SECURE_OFF: process.env.COOKIE_SECURE_OFF,
};

exports.apiConfig = {
  NODE_ENV: 'development',
  ADMIN_URL: process.env.ADMIN_URL,
  API_URL: process.env.API_URL,
  API_HOSTNAME: process.env.API_HOSTNAME,
  API_DATABASE_USER: process.env.MYSQL_USER,
  API_DATABASE_PASSWORD: process.env.MYSQL_PASSWORD,
  API_DATABASE_DATABASE: process.env.API_DATABASE,
  API_DATABASE_HOST: process.env.MYSQL_HOST,
  API_EMAILADDRESS: process.env.API_EMAILADDRESS,
  API_EXPRESS_PORT: process.env.API_PORT,
  API_MAIL_FROM: process.env.API_MAIL_FROM,
  API_MAIL_TRANSPORT_SMTP_PORT: process.env.MAIL_TRANSPORT_SMTP_PORT,
  API_MAIL_TRANSPORT_SMTP_HOST: process.env.MAIL_TRANSPORT_SMTP_HOST,
  API_MAIL_TRANSPORT_SMTP_REQUIRESSL:
    process.env.MAIL_TRANSPORT_SMTP_REQUIRESSL,
  API_MAIL_TRANSPORT_SMTP_AUTH_USER: process.env.MAIL_TRANSPORT_SMTP_AUTH_USER,
  API_MAIL_TRANSPORT_SMTP_AUTH_PASS: process.env.MAIL_TRANSPORT_SMTP_AUTH_PASS,
  API_NOTIFICATIONS_ADMIN_EMAILADDRESS:
    process.env.API_NOTIFICATIONS_ADMIN_EMAILADDRESS,
  API_SECURITY_SESSIONS_COOKIENAME:
    process.env.API_SECURITY_SESSIONS_COOKIENAME,
  API_SECURITY_SESSIONS_ONLYSECURE:
    process.env.API_SECURITY_SESSIONS_ONLYSECURE,
  API_AUTHORIZATION_JWTSECRET: process.env.API_AUTHORIZATION_JWTSECRET,
  API_AUTHORIZATION_FIXEDAUTHTOKENS:
    process.env.API_AUTHORIZATION_FIXEDAUTHTOKENS,
  FRONTEND_URL: process.env.FRONTEND_URL,
  AUTH_URL: process.env.AUTH_APP_URL,
  AUTH_INTERNAL_SERVER_URL: process.env.AUTH_INTERNAL_SERVER_URL,
  AUTH_FIRST_CLIENT_ID: process.env.AUTH_FIRST_CLIENT_ID,
  AUTH_FIRST_CLIENT_SECRET: process.env.AUTH_FIRST_CLIENT_SECRET,
  AUTH_FIRST_CLIENT_LOGIN_CODE: process.env.AUTH_FIRST_CLIENT_LOGIN_CODE,
  MYSQL_ST_GEO_MODE: process.env.MYSQL_ST_GEO_MODE,
  AUTH_ADMIN_CLIENT_ID: process.env.AUTH_ADMIN_CLIENT_ID,
  AUTH_ADMIN_CLIENT_SECRET: process.env.AUTH_ADMIN_CLIENT_SECRET,
  AUTH_API_URL: process.env.AUTH_APP_URL,
};

exports.authConfig = {
  NODE_ENV: 'development',
  PORT: process.env.AUTH_PORT,
  APP_URL: process.env.AUTH_APP_URL,
  API_URL: process.env.API_URL,
  DB_NAME: process.env.AUTH_DB_NAME,
  DB_USER: process.env.MYSQL_USER,
  TEST_CERTS: 1,
  DB_PASSWORD: process.env.MYSQL_PASSWORD,
  DB_HOST: process.env.MYSQL_HOST,
  MAIL_SERVER_URL: process.env.MAIL_TRANSPORT_SMTP_HOST,
  MAIL_SERVER_PORT: process.env.MAIL_TRANSPORT_SMTP_PORT,
  MAIL_SERVER_SECURE: process.env.MAIL_TRANSPORT_SMTP_REQUIRESSL,
  MAIL_SERVER_PASSWORD: process.env.MAIL_TRANSPORT_SMTP_AUTH_PASS,
  MAIL_SERVER_USER_NAME: process.env.MAIL_TRANSPORT_SMTP_AUTH_USER,
  SESSION_SECRET: process.env.SESSION_SECRET,
  EMAIL_ASSETS_URL: process.env.AUTH_EMAIL_ASSETS_URL,
  FRONTEND_URL: process.env.FRONTEND_URL,
  FROM_NAME: process.env.AUTH_MAIL_FROM_NAME,
  FROM_EMAIL: process.env.AUTH_MAIL_FROM_MAIL,
  COOKIE_SECURE_OFF: process.env.COOKIE_SECURE_OFF,
  AUTH_FIRST_CLIENT_ID: process.env.AUTH_FIRST_CLIENT_ID,
  AUTH_FIRST_CLIENT_SECRET: process.env.AUTH_FIRST_CLIENT_SECRET,
  AUTH_FIRST_CLIENT_URL: process.env.FRONTED_URL,
  AUTH_FIRST_CLIENT_LOGIN_CODE: process.env.AUTH_FIRST_CLIENT_LOGIN_CODE,
  MONGO_DB_HOST: process.env.FRONTEND_MONGO_DB_HOST,
  MONGO_DB_PORT: process.env.FRONTEND_MONGO_PORT,
};

exports.adminConfig = {
  SITE_ID: '1',
  PORT: process.env.ADMIN_PORT,
  BASIC_AUTH_USER: process.env.ADMIN_BASIC_AUTH_USER,
  BASIC_AUTH_PASSWORD: process.env.ADMIN_BASIC_AUTH_PASSWORD,
  COOKIE_SECURE_OFF: 'yes',
  FRONTEND_URL: process.env.FRONTEND_URL,
  COOKIE_SECRET: process.env.COOKIE_SECRET,
  SESSION_SECRET: process.env.SESSION_SECRET,
  MONGO_DB_HOST: process.env.FRONTEND_MONGO_DB_HOST,
  MONGO_DB_PORT: process.env.FRONTEND_MONGO_PORT,
  SITE_API_KEY: process.env.FRONTEND_SITE_API_KEY,
  APP_URL: process.env.ADMIN_URL,
  API_URL: process.env.API_URL,
  USER_API: process.env.AUTH_APP_URL,
  USER_API_CLIENT_ID: process.env.AUTH_ADMIN_CLIENT_ID,
  USER_API_CLIENT_SECRET: process.env.AUTH_ADMIN_CLIENT_SECRET,
  ALLOW_HTTP_URLS: process.env.ALLOW_HTTP_URLS,
  FORCE_HTTP: process.env.FORCE_HTTP || 0,
  IMAGE_API_URL: process.env.IMAGE_API_URL,
  IMAGE_API_ACCESS_TOKEN: process.env.IMAGE_API_ACCESS_TOKEN,
};

exports.imageConfig = {
  ENVIRONMENT: 'development',
  PORT_API: process.env.IMAGE_PORT_API,
  PORT_IMAGE_SERVER: process.env.IMAGE_PORT_STEAM,
  APP_URL: process.env.IMAGE_APP_URL,
  DB_HOST: process.env.MYSQL_HOST,
  DB_USER: process.env.MYSQL_USER,
  DB_PASSWORD: process.env.MYSQL_PASSWORD,
  DB_NAME: process.env.IMAGE_DB_NAME,
  FIRST_IMAGE_API_ACCESS_TOKEN: process.env.IMAGE_API_ACCESS_TOKEN,
  COOKIE_SECURE_OFF: process.env.COOKIE_SECURE_OFF,
};
