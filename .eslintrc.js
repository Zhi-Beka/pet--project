module.exports = {
    env: { browser: true, es2021: true, jest: true },
    extends: [
        'plugin:react/recommended',
        'airbnb',

        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next'],
    settings: { 'import/extensions': ['.js', '.jsx', '.ts', '.tsx'] },
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'react/react-in-jsx-scope': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true },
        ],
        'import/extensions': 'off',
        'no-shadow': 'off',
        'react/require-default-props': 'off',
        'react/function-component-definition': 'off',
        'arrow-body-style': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'comma-dangle': 'off',
        'jsx-quotes': [2, 'prefer-single'],
        'comma-spacing': ['error', { before: false, after: true }],
        'object-curly-spacing': ['error', 'always', { objectsInObjects: true }],
        'no-underscore-dangle': 'off',
        'no-unused-vars': 'off',
        'i18next/no-literal-string': [
            'error',
            { markupOnly: true, ignoreAttribute: ['data-testid'] },
        ],
        'implicit-arrow-linebreak': 'off',
        'max-len': ['error', { ignoreComments: true, code: 100 }],
        'react/jsx-wrap-multilines': 'off',
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
