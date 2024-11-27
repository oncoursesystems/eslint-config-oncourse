import { ensurePackages, interopDefault, type TypedFlatConfigItem } from '@antfu/eslint-config';

export async function sencha(): Promise<Array<TypedFlatConfigItem>> {
  await ensurePackages(['@sencha/eslint-plugin-extjs']);
  const pluginSencha = await interopDefault(import('@sencha/eslint-plugin-extjs'));

  return [
    {
      name: 'oncourse/sencha/setup',
      plugins: {
        '@sencha/extjs': pluginSencha,
      },
    },
    {
      name: 'oncourse/sencha/rules',
      rules: {
        ...pluginSencha.configs.recommended.rules,
      },
    },
  ];
}
