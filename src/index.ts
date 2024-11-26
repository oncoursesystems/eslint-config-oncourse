import type { Awaitable, ConfigNames, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config';
import { antfu } from '@antfu/eslint-config';
import type { Linter } from 'eslint';
import type { FlatConfigComposer } from 'eslint-flat-config-utils';

import oncourseConfigs from './config';
import oncourseOptions from './options';

export type Options = {
  expo?: boolean;
  sencha?: boolean;
} & Omit<TypedFlatConfigItem, 'files'> & OptionsConfig;
export type Composer = FlatConfigComposer<TypedFlatConfigItem, ConfigNames>;
export type Configs = Array<Awaitable<Array<Linter.Config> | Array<TypedFlatConfigItem> | FlatConfigComposer<any, any> | TypedFlatConfigItem>>;

function oncourse(options?: Options, ...configs: Configs): Composer {
  return antfu(
    {
      ...oncourseOptions(options),
      ...options,
    },
    ...oncourseConfigs(options),
    ...configs,
  );
}

export default oncourse;

export * from '@antfu/eslint-config';
