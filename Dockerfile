# base
ARG NODE_ENV=production
FROM node:16.14-bullseye-slim as base

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
# COPY ./prisma ./prisma

# `--production=false` installs dev deps needed for build
RUN npm i --production=false
ENV PATH=$PATH:/src/node_modules/.bin

# prisma setup
# RUN npx prisma generate

# compile remix app
# 199kB
RUN cross-env NODE_ENV=$NODE_ENV remix build

# remove dev deps in production builds
# 692kB
# RUN NODE_ENV=$NODE_ENV npm prune

# prod server
FROM base as run
ARG NODE_ENV

RUN apt-get update
RUN apt-get install nginx -y

# first make config available
COPY nginx/mnyou.conf /etc/nginx/sites-available/
# activate config via symlink
RUN ln -s /etc/nginx/sites-available/mnyou.conf /etc/nginx/sites-enabled/mnyou.conf
# RUN service nginx start

COPY --from=remix /src/build ./build
# todo: fly-ify static serve?
# https://trello.com/c/ZqmgXKAw
COPY --from=remix /src/public ./public

COPY package*.json ./
# only package.json's `dependencies`
# `--ignore-scripts` to skip remix's `postinstall`
RUN npm i --only=prod --ignore-scripts

# process management
COPY scripts ./scripts
COPY ecosystem.config.js ./
CMD ./node_modules/.bin/pm2-runtime start ecosystem.config.js
