<div align="center">
  <img width="250" src="https://raw.githubusercontent.com/oncoursesystems/.github/master/assets/logo.jpg" />
  <br/><br/>

# `@oncoursesystems/eslint-config`

OnCourse Systems' ESLint and Prettier config presets for JS/TS/React/ReactNative/Sencha.

  <a href="https://github.com/oncoursesystems/eslint-config/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="OnCourse Systems ESLint config is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.com/package/@oncoursesystems/eslint-config">
    <img src="https://img.shields.io/npm/v/@oncoursesystems/eslint-config.svg" alt="NPM version" />
  </a>
</div>

## Usage

### Install

```bash
# NPM
npm install -D eslint @oncoursesystems/eslint-config

# PNPM
pnpm i -D esling @oncoursesystems/eslint-config
```

Create a `esling.config.{js|ts|mjs}' file in your project root:

```js
// eslint.config.ts
import oncourse from '@oncoursesystems/eslint-config';

export default oncourse();
```

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

### Config VS Code auto-fix on save

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create `.vscode/settings.json`

```json
{
  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto-fix on save
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },

  // Silent the stylistic rules in your IDS, but still auto-fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off", "fixable": true },
    { "rule": "format/*", "severity": "off", "fixable": true },
    { "rule": "*-indent", "severity": "off", "fixable": true },
    { "rule": "*-spacing", "severity": "off", "fixable": true },
    { "rule": "*-spaces", "severity": "off", "fixable": true },
    { "rule": "*-order", "severity": "off", "fixable": true },
    { "rule": "*-dangle", "severity": "off", "fixable": true },
    { "rule": "*-newline", "severity": "off", "fixable": true },
    { "rule": "*quotes", "severity": "off", "fixable": true },
    { "rule": "*semi", "severity": "off", "fixable": true }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "css",
    "less",
    "scss"
  ]
}
```

### React Configuration

To enable React support, you need to explicitly turn it on:

```js
// eslint.config.js
import oncourse from '@oncoursesystems/eslint-config';

export default oncourse({
  react: true,
});
```

Running npx eslint should prompt you to install the required dependencies, otherwise, you can install them manually:

```bash
# NPM
npm i -D @eslint-react/eslint-plugin eslint-plugin-react-hooks eslint-plugin-react-refresh @tanstack/eslint-plugin-query

# PNPM
pnpm i -D @eslint-react/eslint-plugin eslint-plugin-react-hooks eslint-plugin-react-refresh @tanstack/eslint-plugin-query
```

### Sencha ExtJS Configuration

To enable Sencha ExtJS support, you need to explicitly turn it on:

```js
// eslint.config.js
import oncourse from '@oncoursesystems/eslint-config';

export default oncourse({
  react: true,
});
```

Running npx eslint should prompt you to install the required dependencies, otherwise, you can install them manually:

```bash
# NPM
npm i -D @sencha/eslint-plugin-extjs

# PNPM
pnpm i -D @sencha/eslint-plugin-extjs
```

### Customization

Configure the initial preset with the same parameters as expose [@antfu/eslint-config](https://github.com/antfu/eslint-config/blob/main/README.md#customization)

Example:

```js
// eslint.config.ts
import oncourse from '@oncoursesystems/eslint-config';

export default oncourse(
  // Configure integrations here
  {
    formatters: false,
  },
  // Any additional objects will be passed in as ESLint Flat Configs
  // The files config is optional, but can be used to specify which files to lint
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    rules: {
      'ts/typedef': 'off',
    }
  },
);
```

## View Enabled Rules

To view what rules are enabled in your project and apply them to files, go to your project root that contains `eslint.config.js` and run:

```bash
npx @eslint/config-inspector
```

## Release & Publish

Make sure you have authenticated to your npm account using `npm login`. To publish packages, run the following command:

```sh
pnpm run release
```

This will auto-bump the version numbers, then upload the packages to [NPM](https://www.npmjs.com/oncoursesystems). It will also create a new GitHub release with the tagged version.

## Credits

The project is built on top of Anthony Fu's amazing `[@antfu/eslint-config](https://github.com/antfu/eslint-config)` package.
