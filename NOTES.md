## Publishing docs

```
rimraf node_modules/ dist/
npm i
// When on windows - don't run with git bash - the base-href will not populate properly. (use cmd)
ng build --prod --base-href="/ng-selectize/"
```