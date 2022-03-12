# base
ARG NODE_ENV=production
FROM node:16.14-bullseye as base

RUN mkdir /src
WORKDIR /src

# compile remix in isolation
FROM base as remix
ARG NODE_ENV

# files
COPY package*.json remix.* ./

# folders
COPY ./app    ./app
COPY ./public ./public
COPY ./prisma ./prisma

# `--production=false` installs dev deps needed for build
RUN npm i --production=false
ENV PATH=$PATH:/src/node_modules/.bin

# prisma setup
RUN npx prisma generate

# compile remix app
RUN cross-env NODE_ENV=$NODE_ENV remix build

# remove dev deps in production builds
RUN NODE_ENV=$NODE_ENV npm prune

# prod server
CMD npm run start