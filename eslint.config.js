import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
    { ignores: ["dist"] },
    {
        extends: [
            "eslint:recommended",
            "plugin:@typescript-eslint/recommended",
            "prettier", // 添加 prettier
            "plugin:prettier/recommended", // 添加 prettier 插件
        ],
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: "latest",
                ecmaFeatures: { jsx: true },
                sourceType: "module",
            },
        },
        settings: { react: { version: "18.3" } },
        plugins: {
            react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            prettier,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs["jsx-runtime"].rules,
            ...reactHooks.configs.recommended.rules,
            "react/jsx-no-target-blank": "off",
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
            "prettier/prettier": "error",
        },
    },
];
