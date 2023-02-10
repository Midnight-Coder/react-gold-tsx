# Stage 1
FROM --platform=$BUILDPLATFORM node:18.9.1-alpine3.15 as react-build

WORKDIR '/app'
COPY package.json ./
COPY package-lock.json ./

RUN npm install
COPY . .

RUN npm run build

# Stage 2 - the production environment
FROM --platform=$BUILDPLATFORM nginx:1.23.0-alpine as deploy

RUN apk update && \
    apk --no-cache upgrade && \
    apk --no-cache add ca-certificates

COPY --from=react-build /app/build /usr/share/nginx/html
COPY docker-entrypoint.sh /entrypoint.sh
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

RUN chmod +x /entrypoint.sh
RUN chmod -R a+rw /usr/share/nginx/html*

EXPOSE 80
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
