import type {
    Awaitable,
    ConfigNames,
    OptionsConfig,
    TypedFlatConfigItem,
} from '@antfu/eslint-config';
import type { Linter } from 'eslint';
import type { FlatConfigComposer } from 'eslint-flat-config-utils';

import { antfu } from '@antfu/eslint-config';

import oncourseConfigs from './config';
import oncourseOptions from './options';

export type Options = Omit<TypedFlatConfigItem, 'files'> &
    OptionsConfig & {
        expo?: boolean;
        sencha?: boolean;
    };
export type Composer = FlatConfigComposer<TypedFlatConfigItem, ConfigNames>;
export type Configs = Array<
    Awaitable<
        | Array<Linter.Config>
        | Array<TypedFlatConfigItem>
        | FlatConfigComposer<any, any>
        | TypedFlatConfigItem
    >
>;

async function oncourse(options?: Options, ...configs: Configs): Promise<Composer> {
    return antfu(
        {
            ...oncourseOptions(options),
            ...options,
        },
        ...oncourseConfigs(),
        ...configs,
    );
}

export default oncourse;

export * from '@antfu/eslint-config';
