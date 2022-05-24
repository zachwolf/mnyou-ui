# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Fly Setup

1. [Install `flyctl`](https://fly.io/docs/getting-started/installing-flyctl/)

2. Sign up and log in to Fly

```sh
flyctl auth signup
```

3. Setup Fly. It might ask if you want to deploy, say no since you haven't built the app yet.

```sh
flyctl launch
```

### Build Commands

#### Production

*Production-ish, needs DB config

```sh
docker build . -t mnyou
docker run -d -p --name mnyou-prod 3000:3000 mnyou -t mnyou-prod
```

#### Development

```sh
docker-compose up [--build]
```

#### Clear Development Database

If making database changes and seeing:

> PostgreSQL Database directory appears to contain a database; Skipping initialization

Run:

```
docker-compose down --volumes
```

### Database Access

Find postgres container ID via:

```
docker ps

CONTAINER ID   IMAGE                  [...]
............   mnyou-ui_ui            [...]
xxxxxxxxxxxx   postgres:14.2-alpine   [...]
```

Connect:

```
docker exec -it xxxxxxxxxxxx psql --username=postgres
```

#### Via pgAdmin

Development includes a [pgAdmin](https://www.pgadmin.org) instance. After `docker-compose up`:

- open [localhost:5050](http://localhost:5050)
- authenticate with `admin@admin.com` and `root`
- click `Add New Server`
- add any name, e.g.: `mnyou`
- select `Connection`
- set `Host name/address` to `db`
- set `Maintenance database` to `postgres`
- set `Username` to `postgres`
- set `Password` to `postgres`

## Deployment

If you've followed the setup instructions already, all you need to do is run this:

```sh
npm run deploy
```

You can run `flyctl info` to get the url and ip address of your server.

Check out the [fly docs](https://fly.io/docs/getting-started/node/) for more information.
