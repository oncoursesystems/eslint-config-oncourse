import { expo } from './configs/expo';
import { javascript } from './configs/javascript';
import { sencha } from './configs/sencha';
import type { Configs, Options } from './index';

export default function oncourseConfigs(options?: Options): Configs {
  return [
    options?.expo ? expo() : {},
    javascript(),
    options?.sencha ? sencha() : {},
    {
      files: ['**/.vscode/*.json'],
      rules: {
        'jsonc/sort-array-values': [
          'error',
          { order: { natural: true, type: 'asc' }, pathPattern: '^.*$' },
        ],
        'jsonc/sort-keys': [
          'error',
          'asc',
          { caseSensitive: true, natural: true },
        ],
      },
    },
  ];
}
