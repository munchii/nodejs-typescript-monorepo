# nodejs-typescript-monorepo

This repository demonstrates a golden path for a Typescript/Node.js server with the following features:

* monorepo using NPM's workspace feature
* bundled using ESBuild, so monorepo dependencies are correctly included
* packaged as a Docker container

I created this demonstration repository because I was unable to use npm ci with NPM's workspace feature to produce a flat, self-contained node_modules directory suitable for packaging as a Docker container.

This repository does not include/offer an opinion on:

* server frameworks (it uses Node's createServer API)
* logging frameworks (it uses Node's console API)
* test frameworks (it relies on a human monkey)

## Getting Started
1. Install nvm and run `nvm use`
1. Run `npm ci`
1. Run `npm run compile`
1. Run `cd packages/hello-world-service`
1. Run `npm start` (uses ts-node) or `npm start-docker` (uses Docker)
