import process from 'node:process';

import type { Configs } from './index';

const SORT_GROUPS = [
    'type',
    ['builtin', 'external'],
    'internal-type',
    'internal',
    ['parent-type', 'sibling-type', 'index-type'],
    ['parent', 'sibling', 'index'],
    'object',
    'unknown',
];

export default function oncourseConfigs(): Configs {
    return [
        {
            rules: {
                'perfectionist/sort-imports': [
                    'error',
                    {
                        groups: SORT_GROUPS,
                        internalPattern: ['^#/.+'],
                        type: 'natural',
                    },
                ],
                'antfu/if-newline': 'off',
                'antfu/top-level-function': 'off',
                'curly': ['error', 'multi-line'],
                'no-console': [
                    process.env.NODE_ENV === 'production' ? 'error' : 'warn',
                    {
                        allow: ['table', 'info', 'warn', 'error'],
                    },
                ],
                'node/prefer-global/process': 'warn',
                'style/comma-dangle': 'off',
                'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
                'style/jsx-one-expression-per-line': 'off',
                'style/operator-linebreak': [
                    'error',
                    'after',
                    { overrides: { '?': 'before', ':': 'before' } },
                ],
            },
        },
    ];
}
