<div align="center">
  <img width="250" src="https://raw.githubusercontent.com/oncoursesystems/.github/master/assets/logo.jpg" />
  <br/><br/>

  # `@oncoursesystems/eslint-config-ts`
  OnCourse Systems' Typescript ESLint configuration and rules.

  <a href="https://www.npmjs.com/package/@oncoursesystems/eslint-config-ts">
    <img src="https://img.shields.io/npm/v/@oncoursesystems/eslint-config-ts.svg" alt="NPM version" />
  </a>
  <a href="https://github.com/oncoursesystems/eslint-config/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="OnCourse Systems ESLint config is released under the MIT license." />
  </a>
</div>

## Installation

With `npm`:

```sh
npm install eslint @oncoursesystems/eslint-config-ts --save-dev
```

Or using `yarn`:

```sh
yarn add eslint @oncoursesystems/eslint-config-ts -D
```

## Setup

Create an `.eslintrc.js` file with the following:

```json
{
  "extends": ["@oncoursesystems/eslint-config-ts"]
}
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