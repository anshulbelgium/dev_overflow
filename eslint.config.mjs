import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "standard",
    "plugin:tailwindcss/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier"
  ),
  {
    rules: {
      "import/order": [
        "error",
        {
          trailingComma: "es5",
          semi: true,
          tabWidth: 2,
          printWidth: 120,
          endOfLine: "auto",
          trailingComa: true,
          arrowParens: "always",
          plugins: ["prettier-plugin-tailwindcss"],
        },
      ],
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
