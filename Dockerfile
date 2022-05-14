# Stage 1
FROM node:12.0.0-alpine as react-build

ENV PATH /usr/src/app/node_modules/.bin:$PATH

WORKDIR '/app'
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

# Stage 2 - the production environment
FROM reactgold/nginx-vts:0.1

COPY --from=react-build /app/build /usr/share/nginx/html
COPY docker-entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
