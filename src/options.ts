import type { OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config';

import { reactOverrides, reactPlugins } from './configs/react';
import { typescript } from './configs/typescript';
import type { Options } from './index';

export default function oncourseOptions(options?: Options): Omit<TypedFlatConfigItem, 'files'> & OptionsConfig {
  return {
    formatters: {
      css: true,
      html: true,
      markdown: true,
    },
    lessOpinionated: true,
    name: 'oncourse',
    react: options?.react ? reactOverrides() : false,
    ...reactPlugins(options),
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: true,
    },
    typescript: typescript(),
  };
};
