module.exports = {
  env: {
    browser: true,
    jasmine: true,
  },
  extends: ['airbnb'],
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 0,
    'react/no-children-prop': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-underscore-dangle': 0,
    'react/prop-types': 0,
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 0,
    'react/react-in-jsx-scope': 'off',
    'no-trailing-spaces': 'off',
    'no-multiple-empty-lines': 'off',
    'react/jsx-props-no-spreading': 0,
    'max-len': 'off',
    'no-console': 'off',
    indent: 'off',
    'comma-dangle': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-equals-spacing': 'off',
    'no-multi-spaces': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-tag-spacing': 'off',
    'object-curly-newline': 'off',
    'arrow-body-style': 'off',
    'object-curly-spacing': 'off',
    'react/jsx-wrap-multilines': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-curly-newline': 'off',
    'operator-linebreak': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/button-has-type': 'off',
    'arrow-parens': 'off',
    'no-confusing-arrow': 'off',
    'prefer-template': 'off',
    'import/no-unresolved': 'off',
  },
};
