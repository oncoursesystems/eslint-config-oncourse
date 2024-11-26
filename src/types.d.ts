declare module 'eslint-plugin-expo';

declare module '@sencha/eslint-plugin-extjs' {
  import type { ESLint } from 'eslint';

  const eslintPluginSencha: {
    configs: {
      deprecated: ESLint.Config;
      private: ESLint.Config;
      recommended: ESLint.Config;
      removed: ESLint.Config;
    };
  } & ESLint.Plugin;

  export default eslintPluginSencha;
}
