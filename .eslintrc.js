module.exports = {
  extends: ["airbnb", "plugin:@typescript-eslint/recommended"],
  rules: {
    quotes: ["error", "double"],
    "import/order": ["error", {
      groups: [["builtin", "external"], ["internal", "parent", "sibling", "index"]],
      "newlines-between": "always",
    }],
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-var-requires": "off",
    "import/prefer-default-export": "off",
    "import/extensions": ["error", "ignorePackages", { ts: "never", tsx: "never" }],
    "object-curly-newline": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "react/function-component-definition": ["error", { namedComponents: "arrow-function" }],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/control-has-associated-label": "off",
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@src", "./src"],
          ["@pages", "./src/pages"],
          ["@components", "./src/components"],
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  globals: {
    window: true,
  },
};
