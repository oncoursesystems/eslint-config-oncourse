import type { OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config';

import type { Options } from './index';

export default function oncourseOptions(
    options?: Options,
): Omit<TypedFlatConfigItem, 'files'> & OptionsConfig {
    return {
        formatters: true,
        name: 'oncourse',
        stylistic: {
            indent: 4,
            quotes: 'single',
            semi: true,
        },
        typescript: {
            tsconfigPath: 'tsconfig.json',
        },
        yaml: false,
        ...options,
    };
}
