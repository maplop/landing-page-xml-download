import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      'react/prop-types': 'off',
      'no-console': 'warn',
      'import/no-unresolved': 'error',
      'react/jsx-uses-react': 'warn',
      'import/no-unused-modules': 'warn',
    },
  },

  pluginJs.configs.recommended,
  pluginReactConfig,
];
