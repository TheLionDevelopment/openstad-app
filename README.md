<img src="https://openstad.org/uploads/attachments/ckf4445v042sbnl3wvq5yxb9y-logo-openstad2-3x.full.png" width="200"/>

_**Openstad-app** — Collection of Openstad services_

## Getting started

See Openstad docs for cloning and getting started instructions: https://docs.openstad.amsterdam/technical/getting-started.html

```sh
# Clone repo
$ git clone git@github.com:savvycodes/openstad-app.git
$ cd openstad-app
# Pull in submodules
$ git submodule update --init --recursive
```

### Setup environment (node)

Running openstad via node requires you to setup your own MySQL and Mongo databases. You can use the `docker-compose.deps-only.yml` to setup these dependencies for you.

```sh
# Setup environment
$ source setenv
# Install dependencies
$ npm install
# Create .env files for all services
$ npm run configure
# If you don't want to setup mongo, mysql and a smtp server yourself you can use docker-compose.deps-only.yml
$ docker-compose -f docker-compose.deps-only.yml up -d
# Setup databases
# (WARNING: This will reset your existing database)
$ npm run db:install
# Start services
$ npm start
```

You can visit the admin panel on [`localhost:7777`](http://localhost:7777) and the frontend on [`localhost:4444`](http://localhost:4444)

### Setup environment (docker)

> **Note:**: This is a work in progress 🚧

Running openstad with docker for the first time:

```sh
# Create .env file from .env.example
$ make configure
# Migrate and seed databases (this also builds the images if not already present)
$ make init-databases
# Start services
$ docker-compose up
# Open openstad frontend
$ open http://localhost:4444
```