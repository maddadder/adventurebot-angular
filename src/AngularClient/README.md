# AngularClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Help along the way

1. https://learn.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-angular-auth-code
2. https://jasonwatmore.com/post/2022/12/21/angular-14-crud-example-with-reactive-forms
3. https://medium.com/medialesson/group-authorization-in-angular-with-azure-ad-and-app-roles-1120c4b91163


## API Setup
1. This app assumes you followed all the steps in https://github.com/maddadder/adventurebot
2. Once complete you can download the Open Api definition to src/AngularClient/OpenAPIs/
3. To generate the client read api run `npm run generateread`
3. To generate the client readwrite api run `npm run generatereadwrite`

## Debugging

1. Kill any active session if it's already running: `sudo kill $(sudo lsof -t -i:4200)`
2. ng serve --ssl true

## Deploy

1. Initial Setup `ng add angular-cli-ghpages`
2. `ng deploy --base-href=/adventurebot-angular/`