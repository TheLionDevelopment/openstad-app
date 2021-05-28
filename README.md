# Getting started

See Openstad docs for cloning and getting started instructions: https://docs.openstad.amsterdam/technical/getting-started.html

## Setup environment (docker)

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

## Setup environment (node)

Running openstad via node requires you to setup your own MySQL and Mongo databases.

```sh
# Setup environment
$ source setenv
# Install dependencies
$ npm install
# Create .env files for all services
$ npm run configure
# If you don't want to setup mongo, mysql and a smtp server yourself you can use docker-compose.deps-only.yml
$ docker-compose -f docker-compose.deps-only.yml up -d
# Setup databases (WARNING: This will reset your existing database)
$ npm run db:install
# Start services
$ npm start
```
