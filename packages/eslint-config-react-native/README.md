<div align="center">
  <img width="250" src="https://raw.githubusercontent.com/oncoursesystems/.github/master/assets/logo.jpg" />
  <br/><br/>

  # `@oncoursesystems/eslint-config-react-native`
  OnCourse Systems' React Native ESLint configuration and rules.

  <a href="https://www.npmjs.com/package/@oncoursesystems/eslint-config-react-native">
    <img src="https://img.shields.io/npm/v/@oncoursesystems/eslint-config-react-native.svg" alt="NPM version" />
  </a>
  <a href="https://github.com/oncoursesystems/eslint-config/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="OnCourse Systems ESLint config is released under the MIT license." />
  </a>
</div>

## Installation

With `npm`:

```sh
npm install eslint @oncoursesystems/eslint-config-react-native --save-dev
```

Or using `yarn`:

```sh
yarn add eslint @oncoursesystems/eslint-config-react-native -D
```

## Setup

Create an `.eslintrc.js` file with the following:

```json
{
  "extends": ["@oncoursesystems/eslint-config-react-native"]
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