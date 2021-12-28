# ESLint install and config

sources
https://github.com/testing-library/eslint-plugin-testing-library
https://github.com/testing-library/eslint-plugin-jest-dom
https://eslint.org/docs/user-guide/getting-started

follow this first for ESLint

1. `yarn add eslint --dev`
2. `yarn run eslint--dev`

recommended: `yarn run eslint --init`: and go with it.

for plugins:

`yarn add eslint-plugin-testing-library eslint-plugin-jest-dom`

or like this:

`yarn add --dev eslint-plugin-testing-library`
`yarn add --dev eslint-plugin-jest-dom`

1. delete the default eslint in `package.json`
2. create `.eslintrc` in the root

3. put this example config in the `eslintrc.json`

```json
{
  "plugins": ["testing-library", "jest-dom"],
  "extends": [
    "react-app",
    "react-app/jest",
    "plugins:testing-library/react",
    "plugins:testing-library/react",
    "plugins:jest-dom/recommended"
  ]
}
```

## Config vscode that will autofix if save

1. create `.vscode` folder in the root
2. create `settings.json` within that folder

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Add to .gitignore

- `.vscode`
- `.eslintcache`

## Add .eslintignorerc

- to ignore other files not necessary for linting
- create `.eslintignorerc` in the root
- add this:

```
node modules/
*.css
*.svg
coverage
react-app.env.d.ts
reportWebVitals.ts
setupTests.ts
.husky/
build/
.vscode/
.utils/__test__/*
```
