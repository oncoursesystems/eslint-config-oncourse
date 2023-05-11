<div align="center">
  <img width="250" src="https://raw.githubusercontent.com/oncoursesystems/.github/master/assets/logo.jpg" />
  <br/><br/>

  # `@oncoursesystems/eslint-config`
  OnCourse Systems' ESLint and Prettier config presets for JS/TS/React/ReactNative/Sencha.

  <a href="https://github.com/oncoursesystems/eslint-config/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="OnCourse Systems ESLint config is released under the MIT license." />
  </a>
</div>

| Package | Version | Usage |
| --- | --- | --- |
| [`@oncoursesystems/eslint-config-base`](https://github.com/oncoursesystems/eslint-config/tree/master/packages/eslint-config-base/#readme) | <a href="https://www.npmjs.com/package/@oncoursesystems/eslint-config-base"><img src="https://img.shields.io/npm/v/@oncoursesystems/eslint-config-base.svg" alt="NPM version" /></a> | Base rules for JS, JSON, YAML, and Markdown |
| [`@oncoursesystems/eslint-config-react`](https://github.com/oncoursesystems/eslint-config/tree/master/packages/eslint-config-react/#readme) | <a href="https://www.npmjs.com/package/@oncoursesystems/eslint-config-react"><img src="https://img.shields.io/npm/v/@oncoursesystems/eslint-config-react.svg" alt="NPM version" /></a> | Rules for developing React websites |
| [`@oncoursesystems/eslint-config-react-native`](https://github.com/oncoursesystems/eslint-config/tree/master/packages/eslint-config-react-native/#readme) | <a href="https://www.npmjs.com/package/@oncoursesystems/eslint-config-react-native"><img src="https://img.shields.io/npm/v/@oncoursesystems/eslint-config-react-native.svg" alt="NPM version" /></a> | Rules for developing React Native applications |
| [`@oncoursesystems/eslint-config-sencha`](https://github.com/oncoursesystems/eslint-config/tree/master/packages/eslint-config-sencha/#readme) | <a href="https://www.npmjs.com/package/@oncoursesystems/eslint-config-sencha"><img src="https://img.shields.io/npm/v/@oncoursesystems/eslint-config-sencha.svg" alt="NPM version" /></a> | Rules for developing Sencha ExtJS websites |
| [`@oncoursesystems/eslint-config-ts`](https://github.com/oncoursesystems/eslint-config/tree/master/packages/eslint-config-ts/#readme) | <a href="https://www.npmjs.com/package/@oncoursesystems/eslint-config-ts"><img src="https://img.shields.io/npm/v/@oncoursesystems/eslint-config-ts.svg" alt="NPM version" /></a> | Typescript rules |
| [`@oncoursesystems/prettier-config`](https://github.com/oncoursesystems/eslint-config/tree/master/packages/prettier-config/#readme) | <a href="https://www.npmjs.com/package/@oncoursesystems/prettier-config"><img src="https://img.shields.io/npm/v/@oncoursesystems/prettier-config.svg" alt="NPM version" /></a> | Prettier configuration |

## Usage

### Install

```bash
npm install -D eslint @oncoursesystems/eslint-config-base
```

### Config `.eslintrc`

```json
{
  "extends": "@oncoursesystems/eslint-config-base"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Development Setup

### Install dependencies

```sh
pnpm install
```

## Adding new packages

This project uses [pnpm workspaces](https://pnpm.io/workspaces) to manage multiple packages. To ensure that every part of the monorepo infrastructure works as intended, every package must be located within the `./packages/<new-package-name>` folder.

## Release & Publish

Make sure you have authenticated to your npm account using `npm login`.  To publish packages, run the following command:

```sh
pnpm run release
```

This will auto-bump the version numbers, then upload the packages to [NPM](https://www.npmjs.com/oncoursesystems). It will also create a new GitHub release with the tagged version.