module.exports = {
  extends: ["airbnb", "plugin:@typescript-eslint/recommended"],
  rules: {
    quotes: ["error", "double"],
    "import/order": ["error", {
      groups: [["builtin", "external"], ["internal", "parent", "sibling", "index"]],
      "newlines-between": "always",
    }],
    "import/prefer-default-export": "off",
    "object-curly-newline": "off",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-var-requires": "off",
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "react/function-component-definition": ["error", { namedComponents: "arrow-function" }],
    "import/extensions": ["error", "ignorePackages", { ts: "never", tsx: "never" }],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/label-has-associated-control": "off",
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
