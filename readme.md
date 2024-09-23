# Cypress Automation Testing with Cypress Heroes

Cypress Heroes is a project that simulates a website for hiring users for projects.

Using Excel and the Cypress tool, I developed test cases and test automation.

## Test cases
To access the detailed test cases, click on the link: 
**[Test cases and Bug report](https://1drv.ms/x/c/c14e25d05b637ac4/EUj2CtvD6iNDm422I1InZ9IB_higzAfX8jWbEIjfw_9WEg?e=LaETT9)** 

## Automated Testing
To access automated tests, go to **client/cypress/e2e/testsFernandaTaborda.spec.cy.js**

---









# Cypress Heroes Demo Application

This is a demo application that shows how to use Cypress to run end-to-end,
component, and API tests against an application.

## Getting Started

The app is a mono repo that uses npm workspaces. Once you clone the project,
install the dependencies at the root folder:

```sh
npm install
```

After that a few more things need to be set up (databases and such), to do so run:

```sh
npm run setup
```


To launch the app for development, run:

```sh
npm run dev
```

This will start both the client and server apps in dev mode. The site will be
available at http://localhost:3000.

## App Overview

The Cypress Heroes app consists of a frontend client app written in React that
uses Vite, as well as a backend app that uses NestJS.

### React Client App

The React client app is located in the **client** folder. It is a standard React [Vite](https://vitejs.dev/) app.

Todo: fill out

### NestJS Server App

The server app is in the **server** folder. It is built with the [NestJS](https://nestjs.com/) Node.js framework. It uses [Prisma](https://www.prisma.io/) for the database ORM.

#### Database seeding and resetting

The database is seeded from the **server/prisma/seed.ts** script when you set up the app. If at any time you want to reset the database back to its initial state, run:

```sh
npm run resetdb
```

## Environment Variables

The client app uses an environment variable to know what the URL is for the
backend api named `VITE_API_URL`. It defaults to "http://localhost:3001" for use
in dev mode, and should be overriden in other environments/modes.
