declare module 'eslint-plugin-expo';

declare module '@sencha/eslint-plugin-extjs' {
    import type { ESLint } from 'eslint';

    const eslintPluginSencha: ESLint.Plugin & {
        configs: {
            deprecated: ESLint.Config;
            private: ESLint.Config;
            recommended: ESLint.Config;
            removed: ESLint.Config;
        };
    };

    export default eslintPluginSencha;
}
