# Angular 2 Ngrx Scaffold (WIP)

## Project Overview:
An example scaffolding project that I put together to come completely ready with ngrx, unit testing, and e2e testing.


#### Pre-Configured Packages:
`
Webpack,
Jasmine,
Karma,
Protractor
`

---


#### Installation and Setup
* clone this Repo
* cd into cloned directory
* run `npm install`
* run `webpack-dev-server`
* open `http://localhost:8080`

---

#### Testing

#### To Run Unit Tests with Jasmine + Karma
###### Chrome and PhantomJs
run `npm run test`
###### PhantomJs Only
run `npm run test:headless`

#### To Run E2E Tests with Protractor + Jasmine
run `protractor protractor.conf.babel.js`
