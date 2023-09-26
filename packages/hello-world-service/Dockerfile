FROM node:20-alpine
RUN mkdir -p /var/local/@munchii/nodejs-typescript-monorepo-hello-world-service
WORKDIR /var/local/@munchii/nodejs-typescript-monorepo-hello-world-service

COPY dist-docker/ .

EXPOSE 43037

CMD [ "node", "--enable-source-maps", "index.js" ]
