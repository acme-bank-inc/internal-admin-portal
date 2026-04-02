FROM node:20-alpine AS build

ARG AUTH0_DOMAIN=acme-bank-inc.us.auth0.com
ARG AUTH0_CLIENT_ID=PqhcHltyEE8IsW5MW9LeZ4iO2ECORpxl
ARG AUTH0_AUDIENCE=https://api.acmebank.com

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY angular.json tsconfig*.json ./
COPY src src

RUN printf "export const environment = {\n  production: true,\n  auth0Domain: '%s',\n  auth0ClientId: '%s',\n  auth0Audience: '%s',\n};\n" "$AUTH0_DOMAIN" "$AUTH0_CLIENT_ID" "$AUTH0_AUDIENCE" > src/environments/environment.ts

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist/internal-admin-portal/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
