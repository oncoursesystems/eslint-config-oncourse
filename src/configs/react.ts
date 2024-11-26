import type { OptionsConfig, OptionsOverrides } from '@antfu/eslint-config';
import pluginQuery from '@tanstack/eslint-plugin-query';
import type { Linter } from 'eslint';

export function reactOverrides(): OptionsOverrides {
  return {
    overrides: {
    },
  };
}

export function reactPlugins(options?: OptionsConfig): Array<Linter.Config> {
  return options?.react
    ? [
        ...pluginQuery.configs['flat/recommended'],
      ]
    : [];
}
