# Prettier install and configure - SETUP

1. install Prettier in vscode
2. autoFormat on save
3. add this to `.vscode/settings.json` in the root

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

OR

1. `yarn add prettier`
2. add `.prettierrc` in the root and add this:

```json
{
  "tabWidth": 2,
  "printWidth": 120,
  "singleQuote": true,
  "trailingComma": "es5",
  "semi": true
}
```

3. add `.prettierignore` in the root and add this:

```
node_modules/
coverage/
.vscode/

yarn.lock
yarn.error.log
tsconfig.json

react-app.env.d.ts
reportWebVitals.ts
setupTests.ts

.husky/
build/
```
