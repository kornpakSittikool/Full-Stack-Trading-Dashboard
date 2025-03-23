// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs', 'node_modules', 'dist'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: process.cwd(),
        createDefaultProgram: true,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-floating-promises': 'warn',  // เตือนกรณีที่ promises ไม่ถูก handle (เช่นไม่มี await หรือ .catch) เพื่อป้องกันข้อผิดพลาดใน runtime
      '@typescript-eslint/no-unsafe-argument': 'warn', // ห้ามส่ง type อันตราย
      '@typescript-eslint/no-explicit-any': 'error', // ❌ ห้ามใช้ any
      '@typescript-eslint/explicit-function-return-type': 'warn', // ต้องกำหนด return type ให้ฟังก์ชัน
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // แสดง error ถ้ามีตัวแปรที่ไม่ได้ใช้
      'prettier/prettier': 'error', // แจ้ง error ถ้า format ไม่ตรงกับ prettier
    },
  },
);
