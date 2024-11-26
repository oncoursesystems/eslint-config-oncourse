import type { TypedFlatConfigItem } from '@antfu/eslint-config';

const sortOptions = Object.freeze({
  ignoreCase: false,
  partitionByNewLine: true,
  type: 'natural',
});

export function javascript(): TypedFlatConfigItem {
  return {
    files: ['**/*.{cjs,js,mjs,ts}'],
    rules: {
      'perfectionist/sort-array-includes': ['error', sortOptions],
      'perfectionist/sort-enums': ['error', sortOptions],
      'perfectionist/sort-imports': [
        'error',
        {
          groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
          ignoreCase: false,
          type: 'natural',
        },
      ],
      'perfectionist/sort-interfaces': ['error', sortOptions],
      'perfectionist/sort-intersection-types': ['error', sortOptions],
      'perfectionist/sort-object-types': ['error', sortOptions],
      'perfectionist/sort-objects': ['error', sortOptions],
      'perfectionist/sort-sets': ['error', sortOptions],
      'perfectionist/sort-union-types': ['error', sortOptions],
      'perfectionist/sort-variable-declarations': ['error', sortOptions],
    },
  };
}
