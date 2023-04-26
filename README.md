# Backend Nest Sprint
#### exploration of rest api with testable code


### Requirements:

* Node.js (18.x)
* NPM
* TypeScript, NestJS
* Git
* Redis, MongoDB
* Docker - [Install Docker community edition](https://hub.docker.com/search/?type=edition&offering=community)

#### 🎁 If you are a big fan of docker, just don't wait and pull the [docker image](https://hub.docker.com/r/sazal/backend-nest-sprint) by following the commands:

```bash
docker pull sazal/backend-nest-sprint:1.0.0.RELEASE

# to run with docker-compose.yml
docker-compose up
```


Let's clone the repository on your machine.

The application includes the following files and folders.

- `src` - code for the application written in TypeScript, NestJS, Express.js.
- `cli` - node cli script which can be performed from terminal.
- `test` - to test all the features.
- `.env.example` - a sample of .env which can be helpful for configuration.

```bash
# architecture
# deep drive in src directory

src/
├── developer/
│   ├── dto/
│   │   ├── developer.dto.ts
│   │   └── index.ts
│   │
│   ├── schemas/
│   │   └── developer.schema.ts
│   │
│   ├── developer.controller.ts
│   ├── developer.module.ts
│   ├── developer.service.ts
│   └── in-memory-developer.service.ts
│
├── app.module.ts
└── main.ts

```


## Installation and Configuration

Let's move to the cloned directory with your terminal.

To install, build, and start the application for the first time, run the following commands in your shell using `makefile` (only for macOS and Linux):

```bash
make install
```

Let's rename from `.env.example` to `.env` and make sure all the necessary information is correct:

```bash
PORT=3000

MONGODB_URI=<MongoDB_ATLAS_URI>
REDIS_URL=<REDIS_CLOUD_URL>
CACHE_TTL=180
```

Already done? Cool! You are almost ready to enjoy the app. ⛳️


### Build:
```
make build
```

### Run:
```bash
make start

# development mode
# with docker
make start-dev

# production mode
make start-prod
```

### Test:
Oh! You wanna trigger testing for the application from terminal


```bash
# e2e test in production
make test

# e2e test development
make test-dev
```

### Lint:
```bash
make lint

make eslint
```
<br>

#### 🎯 I know, you liked it.
To learn more, you can use the following commands: 
```
make help
```

#### at the same time, you can use the default `npm` commands like:
```bash
npm i
npm run build

# run
npm run start
npm run start:dev
npm run start:prod

# production mode
npm run test:e2e
# development mode
npm run test:e2e:dev

# lint
npm run lint
npm run eslint
```


#### 🎯 Have question about api endpoints? Please check out our [details guide](https://github.com/DevSazal/backend-nest-sprint/blob/main/DEVGUIDE.md)

#### 🥇 Congrats!! You are good to go

#### 🧑‍💻 Stay in touch

- Author - [Sazal Ahamed](https://sazal.vercel.app)

#### tada! 🎉
