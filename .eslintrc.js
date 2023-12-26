module.exports = {
  extends: ["airbnb"],
  rules: {
    quotes: ["error", "double"],
    "import/order": ["error", {
      groups: [["builtin", "external"], ["internal", "parent", "sibling", "index"]],
      "newlines-between": "always",
    }],
  },
};
