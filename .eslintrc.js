module.exports = {
  extends: ["airbnb", "plugin:@typescript-eslint/recommended"],
  rules: {
    quotes: ["error", "double"],
    "import/order": ["error", {
      groups: [["builtin", "external"], ["internal", "parent", "sibling", "index"]],
      "newlines-between": "always",
    }],
    "@typescript-eslint/consistent-type-imports": "error",
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "react/function-component-definition": ["error", { namedComponents: "arrow-function" }],
    "import/extensions": ["error", "ignorePackages", { ts: "never", tsx: "never" }],
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
};
