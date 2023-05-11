module.exports = {
  env: {
    'react-native/react-native': true,
  },
  extends: [
    '@oncoursesystems/eslint-config-react',
  ],
  plugins: [
    'react-native',
  ],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'no-restricted-imports': [
      'error', {
        message: 'Please use \'styled-components/native\' instead.',
        name: 'styled-components',
      },
    ],
    'react/jsx-no-undef': 0,
    'react/react-in-jsx-scope': 0,
    'react-native/no-raw-text': 'off',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
  },
}
