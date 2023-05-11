<div align="center">
  <img width="250" src="https://raw.githubusercontent.com/oncoursesystems/.github/master/assets/logo.jpg" />
  <br/><br/>

  # `@oncoursesystems/eslint-config`
  OnCourse Systems' Sencha ESLint configuration and rules.

  <a href="https://www.npmjs.com/package/@oncoursesystems/eslint-config-sencha">
    <img src="https://img.shields.io/npm/v/@oncoursesystems/eslint-config-sencha.svg" alt="NPM version" />
  </a>
  <a href="https://github.com/oncoursesystems/eslint-config/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="OnCourse Systems ESLint config is released under the MIT license." />
  </a>
</div>

## Installation

With `npm`:

```sh
npm install eslint @oncoursesystems/eslint-config-sencha --save-dev
```

Or using `yarn`:

```sh
yarn add eslint @oncoursesystems/eslint-config-sencha -D
```

## Setup

Create an `.eslintrc.js` file with the following:

```js
extends: ['@oncoursesystems/eslint-config-sencha']
```

## Usage

Add the following `script` to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

and run the linter with:

```sh
yarn lint
```