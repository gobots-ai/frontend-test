# MarvelList

## Working with Marvel API
- Register at [Marvel Developers](https://developer.marvel.com/) to get an api access key
- After registering you can check the api docs [here](https://developer.marvel.com/docs). 
- We will be using the following apis (GET)
  - /v1/public/characters
  - /v1/public/characters/{characterId}/comics
- The filters needed are all in the api documentation

## Hints
You could use Material UI, Bootstrap or any other toolkit to accelerate your resolution.

## Requirements
Use **Angular2+** to build the application. Also, briefly elaborate on your solution architecture details, choice of patterns and frameworks. Fork this repository and submit your code.

## Architeture Details and Frameworks

This web app was developed using Angular 8 integrated with Material Design for Angular. Angular Material modules can be found in the folder `shared/modules/material.module.ts`
The app was created using the concept of Lazy Loading where only the required components are loaded in the view resulting in a lighter application.
All the application stylesheets were write using Sass patterns and syntax.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
