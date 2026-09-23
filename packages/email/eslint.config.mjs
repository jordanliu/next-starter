import { config } from "@repo/eslint-config/react-internal";

export default [
  ...config,
  {
    languageOptions: {
      globals: {
        Buffer: "readonly",
        process: "readonly",
      },
    },
  },
];
