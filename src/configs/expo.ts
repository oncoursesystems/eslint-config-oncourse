import { ensurePackages, interopDefault, type TypedFlatConfigItem } from '@antfu/eslint-config';

export async function expo(): Promise<Array<TypedFlatConfigItem>> {
  await ensurePackages(['eslint-plugin-expo']);
  const pluginExpo = await interopDefault(import('eslint-plugin-expo'));

  return [
    {
      name: 'oncourse/expo/setup',
      plugins: {
        expo: pluginExpo,
      },
    },
    {
      name: 'oncourse/expo/rules',
      rules: {
        'expo/no-dynamic-env-var': ['error'],
        'expo/no-env-var-destructuring': ['error'],
      },
    },
  ];
}
