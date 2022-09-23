module.exports = {
    env: { browser: true, es2021: true },
    extends: ['plugin:react/recommended', 'airbnb'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
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
        'no-unused-vars': 'warn',
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true },
        ],
        'import/extensions': 'off',
        'no-shadow': 'off',
        'react/require-default-props': 'off',
        'react/function-component-definition': [
            'error',
            {
                namedComponents: ['function-declaration', 'arrow-function'],
                unnamedComponents: 'arrow-function',
            },
        ],
        'react/jsx-props-no-spreading': 'warn',
        'comma-dangle': 'off',
        'jsx-quotes': [2, 'prefer-single'],
        'comma-spacing': ['error', { before: false, after: true }],
        'object-curly-spacing': ['error', 'always', { objectsInObjects: true }],
        'no-underscore-dangle': 'off',
    },
    globals: {
        __IS_DEV__: true,
    },
};
