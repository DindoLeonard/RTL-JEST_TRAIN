# Husky and Lint-Staged setup and configure - SETUP

sources:

- https://typicode.github.io/husky/#/?id=automatic-recommended
- https://github.com/okonet/lint-staged

1. install husky.
   `npx husky-init && yarn`
2. configure pre-commit scripts with shell scripts
3. install lint-staged.
   `yarn add lint-staged --dev`
4. create `.lintstagedrc` file and add

```
{
  "*.(js|ts|jsx|tsx)": ["yarn prettier --write"]
}
```
