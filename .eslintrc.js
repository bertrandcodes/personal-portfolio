module.exports = {
  extends: ["airbnb"],
  rules: {
    quotes: ["error", "double"],
    "import/order": ["error", {
      groups: [["builtin", "external"], ["internal", "parent", "sibling", "index"]],
      "newlines-between": "always",
    }],
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
